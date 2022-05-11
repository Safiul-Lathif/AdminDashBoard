import React from 'react'
import "./WidgetLg.css"

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className= {"Widgetlgbutton " + type }> {type} </button>;
  };
  return (
    <div className='widgetlg'>
      <h3 className="widgetlgtitle">latest Transactions </h3>
      <table className="widgetlgtable">
        <tr className="widgetlgtr">
          <th className="widgetlgth">Customer</th>
          <th className="widgetlgth">Date</th>
          <th className="widgetlgth">Amount</th>
          <th className="widgetlgth">Status</th>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="./image/s.jpg" alt="" className="widgetlgimage" />
            <span className="widgetlgname">Safi</span>

          </td>
          <td className="widgetlgdate">2 may 2022</td>
          <td className="widgetlgamount">$22.22</td>
          <td className="widgetlgstatus"><Button type='Declined' /> </td>

        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="./image/s.png" alt="" className="widgetlgimage" />
            <span className="widgetlgname">Salman</span>

          </td>
          <td className="widgetlgdate">2 may 2022</td>
          <td className="widgetlgamount">$72.22</td>
          <td className="widgetlgstatus"><Button type='Approved' /> </td>

        </tr><tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="./image/r.png" alt="" className="widgetlgimage" />
            <span className="widgetlgname">Rasheed</span>

          </td>
          <td className="widgetlgdate">2 may 2022</td>
          <td className="widgetlgamount">$22.22</td>
          <td className="widgetlgstatus"><Button type='Pending' /> </td>

        </tr><tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="./image/a.jpg" alt="" className="widgetlgimage" />
            <span className="widgetlgname">Imran</span>

          </td>
          <td className="widgetlgdate">2 may 2022</td>
          <td className="widgetlgamount">$27.22</td>
          <td className="widgetlgstatus"><Button type='Approved' /> </td>

        </tr>
      </table>
    </div>
  )
}
