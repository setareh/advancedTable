import React from "react";

export default function AdvancedTable() {
  return (
    <table class="w-full table-auto border-collapse text-sm overflow-x-auto">
      <thead>
        <tr>
          <th className="border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-semibold text-gray-900">
            id
          </th>
          <th className="border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-semibold text-gray-900">
            Avatar
          </th>
          <th className="border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-semibold text-gray-900">
            First Name
          </th>
          <th className="border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-semibold text-gray-900">
            Last Name
          </th>
          <th className="border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-semibold text-gray-900">
            Email
          </th>
        </tr>
      </thead>
      <tbody className="dark:bg-gray-800">
        <tr>
          <td className="border-b border-gray-100 p-4 pl-8 text-gray-500">
            123
          </td>
          <td className="border-b border-gray-100 p-4 pl-8 text-gray-500">
            <img src="" alt="profile image" />
          </td>
          <td className="border-b border-gray-100 p-4 pl-8 text-gray-500">
            Setare
          </td>
          <td className="border-b border-gray-100 p-4 pl-8 text-gray-500">
            Hajibagheri
          </td>
          <td className="border-b border-gray-100 p-4 pl-8 text-gray-500">
            setare@gmail.com
          </td>
        </tr>
      </tbody>
    </table>
  );
}
