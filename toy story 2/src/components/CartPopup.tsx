import React from 'react'
import { X, Trash2, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'

const CartPopup: React.FC = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    isCartOpen, 
    closeCart 
  } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-30 z-40"
        onClick={closeCart}
      />
      
      {/* Cart Popup - Small Modal positioned near header */}
      <div className="fixed top-[120px] right-8 w-[429px] max-h-[500px] bg-white border-[0.3px] border-black z-50 overflow-y-auto rounded-[20px] shadow-2xl max-md:w-[95%] max-md:right-[2.5%] max-md:max-h-[80vh]">
        {/* Close Button */}
        <button
          onClick={closeCart}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close cart"
        >
          <X size={18} className="text-black" />
        </button>

        <div className="p-5">
          {/* Cart Items List */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <ShoppingBag size={48} className="text-gray-300 mb-3" />
              <p className="text-gray-500 text-base font-tilt-warp">Giỏ hàng trống</p>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.product.id} className="mb-4">
                  {/* Product Info */}
                  <div className="flex gap-3">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-[88px] h-[88px] rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-red-hat text-[14px] text-black leading-tight mb-2 line-clamp-2 pr-6">
                        {item.product.name}
                      </h3>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center border border-[#c6bfbf] rounded-[5px] overflow-hidden h-[26px]">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-[27px] h-full flex items-center justify-center hover:bg-gray-100 transition-colors text-black font-tilt-warp text-[14px]"
                          >
                            -
                          </button>
                          <span className="px-3 h-full flex items-center justify-center min-w-[40px] text-black font-red-hat text-[14px] border-l border-r border-[#c6bfbf]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-[27px] h-full flex items-center justify-center hover:bg-gray-100 transition-colors text-black font-tilt-warp text-[14px]"
                          >
                            +
                          </button>
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1.5 hover:bg-red-50 rounded transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} className="text-red-600" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-200 mt-3" />
                </div>
              ))}

              {/* Total Section */}
              <div className="bg-[#f2c9c9] rounded-[25px] p-4 mt-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-red-hat text-[14px] text-[#ff2c2c]">
                    Tổng cộng
                  </span>
                  <span className="font-tilt-warp text-[15px] text-red-600">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2 mb-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-0.5 w-[18px] h-[18px] border-[0.2px] border-black rounded-[4px] flex-shrink-0 cursor-pointer"
                />
                <label htmlFor="terms" className="text-[12px] text-black font-red-hat leading-tight cursor-pointer">
                  Tôi đã đọc và đồng ý với{' '}
                  <span className="text-red-600">Chính sách bảo mật</span> và{' '}
                  <span className="text-red-600">Điều kiện thanh toán</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="flex-1 h-[33px] border border-[#c40000] rounded-[25px] flex items-center justify-center gap-2 hover:bg-red-50 transition-colors no-underline"
                >
                  <ShoppingBag size={14} className="text-[#ff2c2c]" />
                  <span className="font-reddit-sans text-[14px] text-[#ff2c2c] font-normal">
                    xem giỏ hàng
                  </span>
                </Link>
                
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="flex-1 h-[33px] bg-[#d62525] border border-[#c40000] rounded-[25px] flex items-center justify-center hover:bg-[#c41f1f] transition-colors no-underline"
                >
                  <span className="font-reddit-sans text-[14px] text-white font-normal">
                    Thanh Toán Ngay
                  </span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CartPopup
