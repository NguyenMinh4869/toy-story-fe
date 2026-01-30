import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import SetListTable from '../../components/admin/SetListTable';
import Modal from '../../components/ui/Modal';
import { 
  getSets, 
  createSet 
} from '../../services/setService';
import type { ViewSetDto, CreateSetDto } from '../../types/SetDTO';

const SetManagementPage: React.FC = () => {
  const [sets, setSets] = useState<ViewSetDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSet, setCurrentSet] = useState<ViewSetDto | null>(null);
  
  // Form State
  const [formData, setFormData] = useState<Partial<CreateSetDto>>({
    Name: '',
    Description: '',
    DiscountPercent: 0
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getSets();
      setSets(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load sets');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'DiscountPercent' ? Number(value) : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (currentSet && currentSet.setId) {
        // Note: The backend currently doesn't support updating set details.
        // For now, we'll show an error message.
        setError('Updating sets is not currently supported. Please create a new set instead.');
        return;
      } else {
        await createSet(formData as CreateSetDto, imageFile || undefined);
        setIsModalOpen(false);
        fetchData();
      }
    } catch (err) {
      console.error(err);
      setError('Failed to save set');
    } finally {
      setLoading(false);
    }
  };

  const openCreateModal = () => {
    setCurrentSet(null);
    setFormData({
      Name: '',
      Description: '',
      DiscountPercent: 0
    });
    setImageFile(null);
    setIsModalOpen(true);
  };

  const openEditModal = (set: ViewSetDto) => {
    setCurrentSet(set);
    setFormData({
      Name: set.name || '',
      Description: set.description || '',
      DiscountPercent: set.discountPercent || 0
    });
    setImageFile(null);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Set Management</h1>
        <button 
          onClick={openCreateModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Add Set
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading && !isModalOpen ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <SetListTable 
            sets={sets} 
            onEdit={openEditModal} 
          />
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={currentSet ? 'Edit Set' : 'Add New Set'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Set Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="Description"
              value={formData.Description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Percent (%)</label>
            <input
              type="number"
              name="DiscountPercent"
              value={formData.DiscountPercent}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              max="100"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {currentSet?.imageUrl && !imageFile && (
              <div className="mt-2">
                <p className="text-xs text-gray-500 mb-1">Current Image:</p>
                <img src={currentSet.imageUrl} alt="Current" className="h-20 rounded" />
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Set'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SetManagementPage;
