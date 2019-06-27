import React from 'react';
import { Link } from 'react-router-dom';
import Loader from "./Loader";

class Customer extends React.Component {

  state = {
    products: [],
    user: null,
    dataAcquired: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        user: {
          id: 'user1234',
          name: 'Saad Haris',
          sex: 'Male',
          contact: '0345-1234567',
          address: 'House 12/F, Block C, DHA 1, Islamabad',
          cnic: '36302-2345678-7',
        },
        products: [
          {
            id: 'item1',
            name: 'Kenwood 1.5 Ton Split AC',
            price: '83499',
            quantity: 1
          },
          {
            id: 'item2',
            name: 'LG Smart LED',
            price: '60300',
            quantity: 2
          },
          {
            id: 'item3',
            name: 'Haier Washing Machine',
            price: '30000',
            quantity: 1
          }
        ],
        dataAcquired: true,
      });
    }, 2000)
  }

  editItemQuantity (action, itemId) {
    const products = [ ...this.state.products];
    for (let i=0; i<=products.length; i+=1) {
      if (products[i].id === itemId) {
        if (action === 'add') {
          products[i].quantity += 1;
        } else if (action === 'subtract' && products[i].quantity > 0){
          products[i].quantity -= 1;
        }
        break;
      }
    }

    this.setState({
      products
    });
  }

  renderProducts () {
    return this.state.products.map(item => {
      return (
          <tr className="" key={item.id}>
            <td className="collapsing">
              {/*<div className="ui fitted checkbox">*/}
                {/*<input type="checkbox" className="hidden" readOnly="" tabIndex="0"/>*/}
                {/*<label></label>*/}
              {/*</div>*/}
            </td>
            <td className="">{item.name}</td>
            <td className="">{item.price}</td>
            <td className="">
              <table>
                <tbody>
                <tr className="">
                  <td className="">{item.quantity}</td>
                  <td className="">
                    <button className="ui icon button" onClick={() => {this.editItemQuantity('add', item.id)}}><i aria-hidden="true" className="plus icon"></i></button>
                    <button className="ui icon button" onClick={() => {this.editItemQuantity('subtract', item.id)}}><i aria-hidden="true" className="minus icon"></i></button>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
            <td className="">{item.price * item.quantity}</td>
          </tr>
      );
    });
  }

  render () {

    const { user, dataAcquired, products } = this.state;

    return (
        <div className="ui segment mbl-container">
          <div className="ui four column grid mbl-container">
            <div className="ui container">
              <img className="tablet-icon" src="/tablet-icon.png" alt="icon"/>
            </div>
            <div className="ui text container">
              <h1 className="ui header mbl-header">STORE MEEZAN CREDITEASE</h1>
            </div>
            {!dataAcquired ?
                <div className="ui container"><Loader text="Fetching transaction data..."/></div> :
                <div className="ui container">
                  <div className="ui container">
                    <div className="ui label mbl-label">Transaction Details</div>
                  </div>
                  <div className="ui container">
                    <div className="ui cards">
                      <div className="ui card mbl-customer-card">
                        <div className="content">
                          <div className="header"><u>{user.sex === 'Male' ? 'Mr.' : 'Ms.'} {user.name}</u></div>
                          <div className="meta">{user.contact}</div>
                          <div className="description">
                            <b>Address:</b> {user.address}
                            <br></br>
                            <b>CNIC:</b> {user.cnic}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ui container">
                      <table className="ui celled definition compact table purple inverted">
                        <thead className="full-width">
                        <tr className="">
                          <th className=""></th>
                          <th className="">Product Name</th>
                          <th className="">Price Per Item (Rs.)</th>
                          <th className="">Quantity</th>
                          <th className="">Price (Rs.)</th>
                        </tr>
                        </thead>
                        <tbody className="">
                        {this.renderProducts()}
                        </tbody>
                        <tfoot className="full-width">
                        <tr className="">
                          <th className=""></th>
                          <th colSpan="2" className=""></th>
                          <th className="">Grand Total (Rs.)</th>
                          <th className="">
                              {products.reduce((a, b) => a + ((b.price * b.quantity) || 0), 0)}
                          </th>
                        </tr>
                        <tr className="">
                          <th className=""></th>
                          <th colSpan="4" className="">
                            <Link to={`/confirm/order123`}>
                            <button className="ui small icon primary right floated left labeled button">
                              <i aria-hidden="true" className="angle right icon"></i>
                              Confirm
                            </button>
                            </Link>
                          </th>
                        </tr>
                        </tfoot>
                      </table>
                  </div>
                </div>
            }
          </div>
          <p></p>
        </div>
    );
  }
}

export default Customer;