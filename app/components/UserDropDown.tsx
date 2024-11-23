import { useState } from 'react';

import { SignOut } from './SignOut';

export function UserDropDown({
  imageUrl,
  name,
}: {
  imageUrl: string | null | undefined;
  name: string | null | undefined;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const defaultImageUrl = 'https://via.placeholder.com/150';
  const defaultName = 'Unknown User';
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownUserAvatarButton"
        className="flex items-center gap-2 rounded-full focus:outline-none"
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={imageUrl || defaultImageUrl}
          alt={`${name || defaultName}'s avatar`}
        />
        <span className="text-sm font-medium text-gray-700">{name || defaultName}</span>
      </button>

      {isOpen && (
        <div
          id="dropdownUserAvatar"
          className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-10"
        >
          <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownUserAvatarButton">
            <li>
              <SignOut />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
