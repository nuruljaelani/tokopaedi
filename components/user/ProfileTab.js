/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Biodata from './Biodata';
import Alamat from './Alamat';
import Bank from './Bank';
import Pengaturan from './Pengaturan';
import Notifikasi from './Notifikasi';

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
        id: 2,
        title: 'Daftar Alamat',
        component: <Alamat />,
      },
    ],
    Bank: [
      {
        id: 3,
        title: 'Rekening Bank',
        component: <Bank />,
      },
    ],
    Keamanan: [
      {
        id: 4,
        title: 'Pengaturan',
        component: <Pengaturan />,
      },
    ],
    Notifikasi: [
      {
        id: 5,
        title: 'Notifikasi',
        component: <Notifikasi />,
      },
    ],
  });

  return (
    <div className="w-full px-2 sm:px-0 border rounded shadow">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 border-b">
          {
            Object.values(categories).map((item, index) => (
              <Tab
                key={index}
                className={({ selected }) => classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white',
                  selected
                    ? 'bg-green-50 shadow'
                    : 'text-gray-500',
                )}
              >
                {
                  item.map((row) => (
                    <div key={row.id}>
                      {row.title}
                    </div>
                  ))
                }
              </Tab>
            ))
          }
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
