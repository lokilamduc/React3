import React from "react";

function Shoedetail({ product, onClose }) {
  if (!product) {
    return null;
  }
  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
      >
        <div className="card-body modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" onClick={onClose} />
            </div>
            <div className="text-center">
              <h3>{product.name}</h3>
              <img
                src={product.image}
                alt={product.name}
                width="50%%"
                height="350px"
              />
            </div>
            <div>
              <h3 className="text-center">Chi tiết sản phẩm</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>price:</td>
                    <td>{product.price}</td>
                  </tr>
                  <tr>
                    <td>description:</td>
                    <td>{product.description}</td>
                  </tr>
                  <tr>
                    <td>shortDescription:</td>
                    <td>{product.shortDescription}</td>
                  </tr>
                  <tr>
                    <td>quantity:</td>
                    <td>{product.quantity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

export default Shoedetail;
