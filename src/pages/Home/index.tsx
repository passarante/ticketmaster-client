import React, { useState } from 'react';
import Layout from '../../components/Layout';
import TicketTable from 'src/components/Home/TicketTable';

const Home = () => {
  const [status, setStatus] = useState(true);
  return (
    <Layout>
      <div className="flex">
        {status && (
          <div className="flex flex-wrap w-1/2 bg-white shadow-lg h-auto rounded border-l-8 border-orange-500 my-6 mr-3 ">
            <div className="flex p-3 pl-6 pr-6 w-full justify-between rounded-tr">
              <div className="pt-0 mt-0 ">
                <p className="font-extrabold text-xl text-gray-900">
                  Toplam Ticketlar
                </p>
              </div>

              <div className="flex ">
                <img
                  onClick={() => setStatus(false)}
                  src="https://image.flaticon.com/icons/svg/59/59254.svg"
                  alt=""
                  className="cursor-pointer h-4 w-4 opacity-25"
                />
              </div>
            </div>

            <div className="px-6">
              <div className="flex flex-wrap w-full py-3">
                <div className="flex md:flex-col w-full  md:w-auto  px-4">
                  <p className="font-extrabold text-xl text-gray-900">Aktif</p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <img
                      src="https://image.flaticon.com/icons/svg/2922/2922970.svg"
                      alt=""
                      className="h-4 w-4 mr-1"
                    />
                    12
                  </p>
                </div>

                <div className="flex md:flex-col w-full  md:w-auto px-4">
                  <p className="font-extrabold text-xl text-gray-900">
                    Bekleyen
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <img
                      src="https://image.flaticon.com/icons/svg/2922/2922970.svg"
                      alt=""
                      className="h-4 w-4 mr-1"
                    />
                    23
                  </p>
                </div>

                <div className="flex md:flex-col w-full md:w-auto  px-4 ">
                  <p className="font-extrabold text-xl text-gray-900">
                    Kapanan
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <img
                      src="https://image.flaticon.com/icons/svg/2922/2922970.svg"
                      alt=""
                      className="h-4 w-4 mr-1"
                    />
                    11
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-wrap w-1/2 bg-white shadow-lg h-auto rounded border-l-8 border-green-500 my-6">
          <div className="flex p-3 pl-6 pr-6 w-full justify-between rounded-tr">
            <div className="pt-0 mt-0 ">
              <p className="font-extrabold text-xl text-gray-900">
                Toplam Ticketlar
              </p>
            </div>

            <div className="flex ">
              <img
                src="https://image.flaticon.com/icons/svg/59/59254.svg"
                alt=""
                className="cursor-pointer h-4 w-4 opacity-25"
              />
            </div>
          </div>

          <div className="px-6">
            <div className="flex flex-wrap w-full py-3">
              <div className="flex md:flex-col w-full  md:w-auto  px-4">
                <p className="font-extrabold text-xl text-gray-900">Aktif</p>
                <p className="text-sm text-gray-600 flex items-center">
                  <img
                    src="https://image.flaticon.com/icons/svg/2922/2922970.svg"
                    alt=""
                    className="h-4 w-4 mr-1"
                  />
                  12
                </p>
              </div>

              <div className="flex md:flex-col w-full  md:w-auto px-4">
                <p className="font-extrabold text-xl text-gray-900">Bekleyen</p>
                <p className="text-sm text-gray-600 flex items-center">
                  <img
                    src="https://image.flaticon.com/icons/svg/2922/2922970.svg"
                    alt=""
                    className="h-4 w-4 mr-1"
                  />
                  23
                </p>
              </div>

              <div className="flex md:flex-col w-full md:w-auto  px-4 ">
                <p className="font-extrabold text-xl text-gray-900">Kapanan</p>
                <p className="text-sm text-gray-600 flex items-center">
                  <img
                    src="https://image.flaticon.com/icons/svg/2922/2922970.svg"
                    alt=""
                    className="h-4 w-4 mr-1"
                  />
                  11
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TicketTable />
    </Layout>
  );
};

export default Home;
