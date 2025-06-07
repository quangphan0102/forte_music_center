import React from 'react';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import ForteLogo from '../assets/images/logos/forte_logo.png'; // Import logo
import MusicBackgroundDecoration from './MusicBackgroundDecoration'; // Import background decoration

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] py-12 px-4 sm:px-6 lg:px-8 rounded-t-xl border-t border-gray-200 relative overflow-hidden">
      {/* Background Decoration */}
      <MusicBackgroundDecoration />

      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8 relative z-10">

        {/* Logo */}
        <div className="flex justify-center pb-8 mb-4 border-b-[2.5px] border-gray-700 w-1/3 mx-auto">
          <img src={ForteLogo} alt="Forte Music Page Logo" className="h-20 w-auto" />
        </div>

        {/* Navigation Links (Optional based on your site structure, adding for completeness as per image)
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold leading-6 text-gray-600">
          <a href="#overview" className="hover:text-gray-900">Tổng quan</a>
          <a href="#features" className="hover:text-gray-900">Tính năng</a>
          <a href="#pricing" className="hover:text-gray-900">Giá cả</a>
          <a href="#careers" className="hover:text-gray-900">Tuyển dụng</a>
          <a href="#help" className="hover:text-gray-900">Trợ giúp</a>
          <a href="#privacy" className="hover:text-gray-900">Bảo mật</a>
        </nav> */}

        {/* Contact Information */}
        <div className="flex flex-col items-center text-gray-600 text-sm">
          <p className="flex items-center mb-2 font-bold text-base">
            <MapPinIcon className="h-5 w-5 mr-2 text-gray-500" />
            Nơ Trang Long, KP5, Phước Long, Bình Phước
          </p>
          <p className="flex items-center font-bold text-base">
            <PhoneIcon className="h-5 w-5 mr-2 text-gray-500" />
            Số Điện Thoại: 0858 561 571 - 0965 509 184 (Cô Nguyên)
          </p>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-xs leading-5 text-gray-500">
          &copy; 2025 Waugn Created, All right reserved.
        </p>
      </div>
    </footer>
  );
} 