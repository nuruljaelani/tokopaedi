/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Biodata from './Biodata';
import Alamat from './Alamat';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProfileTab() {
  const [categories] = useState({
    Biodata: [
      {
        id: 1,
        title: 'Biodata',
        component: <Biodata />,
      },
    ],
    Alamat: [
      {
        id: 1,
        title: 'Daftar Alamat',
        component: <Alamat />,
      },
    ],
    Bank: [
      {
        id: 1,
        title: 'Rekening Bank',
        component: <Biodata />,
      },
    ],
    Keamanan: [
      {
        id: 1,
        title: 'Pengaturan',
        component: <Biodata />,
      },
    ],
    Notifikasi: [
      {
        id: 1,
        title: 'Notifikasi',
        component: <Biodata />,
      },
    ],
  });

  return (
    <div className="w-full px-2 sm:px-0 border rounded shadow">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 border-b">
          {Object.values(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) => classNames(
                'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white',
                selected
                  ? 'bg-green-50 shadow'
                  : 'text-gray-500',
              )}
            >
              {category.map((item) => (
                item.title
              ))}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((components, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3',
                'focus:outline-none',
              )}
            >
              { components.map((component) => (
                <div key={component.id}>
                  {component.component}
                </div>
              )) }
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
