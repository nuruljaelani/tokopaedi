/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import { Tab } from '@headlessui/react';

export default function Pengaturan() {
  return (
    <Tab.Group vertical as="div" className="flex space-x-10 items-start p-4">
      <Tab.List className="flex flex-col space-y-2 w-1/4 items-start border-r text-sm">
        <Tab className="text-gray-400 font-semibold">Ubah Kata Sandi</Tab>
        <Tab className="text-gray-400 font-semibold">Tab 2</Tab>
        <Tab className="text-gray-400 font-semibold">Tab 3</Tab>
      </Tab.List>
      <Tab.Panels className="w-3/4">
        <Tab.Panel>
          <div className="flex">
            <form className="flex flex-col space-y-3">
              <div className="flex flex-col">
                <label className="text-gray-500 text-sm">Kata sandi lama</label>
                <input type="text" className="border rounded-md outline-none appearance-none p-2" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500 text-sm">Kata sandi baru</label>
                <input type="text" className="border rounded-md outline-none appearance-none p-2" />
              </div>
            </form>
          </div>
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
