import React from 'react';
import './TicketTable.css';
const TicketTable = () => {
  return (
    <div className="w-full  m-auto mt-6 bg-white shadow-lg">
      <table className="w-full table-collapse">
        <thead>
          <tr>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">
              Tarih
            </th>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">
              Ticket Konusu
            </th>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">
              Durum
            </th>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light text-center">
              Amount Owing
            </th>
            <th className="text-sm uppercase font-semibold text-grey-darker p-3 bg-grey-light"></th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          <tr className="group cursor-pointer hover:bg-grey-lightest">
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Dang Van Thanh
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Sep, 11 2018
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              2 days ago
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
              $100.00
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible">
              <div className="invisible group-hover:visible">
                <a href="#" className="no-underline text-blue">
                  View
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Edit
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Delete
                </a>
              </div>
            </td>
          </tr>
          <tr className="group cursor-pointer hover:bg-grey-lightest">
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Hanux Huynh
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Sep, 15 2018
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              6 days ago
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
              $450.00
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm">
              <div className="invisible group-hover:visible">
                <a href="#" className="no-underline text-blue">
                  View
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Edit
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Delete
                </a>
              </div>
            </td>
          </tr>
          <tr className="group cursor-pointer hover:bg-grey-lightest">
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Dinh Ngoc Thien Thao
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Sep, 19 2018
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              10 days ago
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
              $600.00
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible">
              <div className="invisible group-hover:visible">
                <a href="#" className="no-underline text-blue">
                  View
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Edit
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Delete
                </a>
              </div>
            </td>
          </tr>
          <tr className="group cursor-pointer hover:bg-grey-lightest">
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Cao Thai Sang
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Aug, 11 2018
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              1 month ago
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
              $150.00
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm">
              <div className="invisible group-hover:visible">
                <a href="#" className="no-underline text-blue">
                  View
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Edit
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Delete
                </a>
              </div>
            </td>
          </tr>
          <tr className="group cursor-pointer hover:bg-grey-lightest">
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Xuan Hoi Nghi
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Jul, 11 2018
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              2 months ago
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
              $700.00
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible">
              <div className="invisible group-hover:visible">
                <a href="#" className="no-underline text-blue">
                  View
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Edit
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Delete
                </a>
              </div>
            </td>
          </tr>
          <tr className="group cursor-pointer hover:bg-grey-lightest">
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Bao Thien Ha
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Jul, 11 2018
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              2 months ago
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
              $650.00
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm">
              <div className="invisible group-hover:visible">
                <a href="#" className="no-underline text-blue">
                  View
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Edit
                </a>{' '}
                <span className="text-grey">|</span>
                <a href="#" className="no-underline text-blue">
                  Delete
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
