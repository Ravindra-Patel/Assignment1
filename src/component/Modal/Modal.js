import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ hide, inputId, updateData, name, contact, email, social }) => {
  const [data, setData] = useState({
    name: name,
    contact: contact,
    social: social,
    email: email,
  });

  const [validation, setValidation] = useState({
    name: "",
    contact: "",
    email: "",
    social: "",
  });

  const validationCheck = (name, value) => {
    console.log(name, value);

    switch (name) {
      case "name": //Name Validation
        if (!value.trim()) {
          setValidation((prevState) => {
            return {
              ...prevState,
              name: "This field is required",
            };
          });
        } else {
          setValidation((prevState) => {
            return {
              ...prevState,
              name: "",
            };
          });
        }
        break;

      case "email": //Email validation
        const emailCond = "[a-zA-Z0-9.]+@[a-zA-Z]+[.]{1}[a-zA-Z]+";
        if (!value.trim()) {
          setValidation((prevState) => {
            return {
              ...prevState,
              email: "This field is required",
            };
          });
        } else if (!value.match(emailCond)) {
          setValidation((prevState) => {
            return {
              ...prevState,
              email: "Invalid Email",
            };
          });
        } else {
          setValidation((prevState) => {
            return {
              ...prevState,
              email: "",
            };
          });
        }
        break;

      case "contact":
        if (!value.trim()) {
          setValidation((prevState) => {
            return {
              ...prevState,
              contact: "This field is required",
            };
          });
        } else {
          setValidation((prevState) => {
            return {
              ...prevState,
              contact: "",
            };
          });
        }
        break;
      case "social": //Website Validation
        if (!value.trim()) {
          setValidation((prevState) => {
            return {
              ...prevState,
              social: "This field is required",
            };
          });
        } else {
          setValidation((prevState) => {
            return {
              ...prevState,
              social: "",
            };
          });
        }

        break;
      default:
        break;
    }
  };

  const onInputChange = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });

    validationCheck(e.target.name, e.target.value);
  };

  const submitHandler = (event) => {
    if (
      validation.email === "" &&
      validation.name === "" &&
      validation.contact === "" &&
      validation.social === ""
    ) {
      event.preventDefault();
      updateData(inputId, data);
      hide();
    }
  };

  return (
    <>
      <div
        className="wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div
          className="modal"
          style={{ width: "520px", transformOrigin: "249px 299px" }}
        >
          <div className="content">
            <button
              aria-label="Close"
              className="ant-modal-close"
              onClick={() => {
                hide();
              }}
            >
              <span className="ant-modal-close-x">
                <i
                  aria-label="icon: close"
                  className="anticon anticon-close ant-modal-close-icon"
                >
                  <svg
                    viewBox="64 64 896 896"
                    class=""
                    data-icon="close"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                  </svg>
                </i>
              </span>
            </button>

            <div className="header">
              <div className="title">Basic Modal</div>
            </div>

            <div className="modal-body">
              <form className="form" onSubmit={submitHandler}>
                <div
                  className={`row item ${validation.name !== "" ? "help" : ""}`}
                >
                  <div className="col label col-xs-24 col-sm-8">
                    <label
                      htmlFor="name"
                      title="Name"
                      className="item-required"
                    >
                      Name
                    </label>
                  </div>

                  <div className="col controller-wrapper col-xs-24 col-sm-16">
                    <div
                      className={`item-control ${
                        validation.name !== "" ? "success" : "error"
                      }`}
                    >
                      <span className="item-children">
                        <input
                          className="input"
                          id="name"
                          type="text"
                          required
                          // id="title"
                          value={data.name}
                          name="name"
                          onChange={onInputChange}
                        ></input>
                      </span>
                      {validation.name !== "" && (
                        <div className="explain">{validation.name}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={`row item ${
                    validation.email !== "" ? "help" : ""
                  }`}
                >
                  <div className="col label col-xs-24 col-sm-8">
                    <label
                      htmlFor="email"
                      title="Email"
                      className="item-required"
                    >
                      Email
                    </label>
                  </div>

                  <div className="col controller-wrapper col-xs-24 col-sm-16">
                    <div
                      className={`item-control ${
                        validation.email !== "" ? "success" : "error"
                      }`}
                    >
                      <span className="item-children">
                        <input
                          className="input"
                          id="email"
                          type="text"
                          required
                          // id="title"
                          value={data.email}
                          name="email"
                          onChange={onInputChange}
                        ></input>
                      </span>
                      {validation.email !== "" && (
                        <div className="explain">{validation.email}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={`row item ${
                    validation.contact !== "" ? "help" : ""
                  }`}
                >
                  <div className="col label col-xs-24 col-sm-8">
                    <label
                      htmlFor="phone"
                      title="Phone"
                      className="item-required"
                    >
                      Phone
                    </label>
                  </div>

                  <div className="col controller-wrapper col-xs-24 col-sm-16">
                    <div
                      className={`item-control ${
                        validation.contact !== "" ? "success" : "error"
                      }`}
                    >
                      <span className="item-children">
                        <input
                          className="input"
                          id="phone"
                          type="text"
                          required
                          // id="title"
                          value={data.contact}
                          name="contact"
                          onChange={onInputChange}
                        ></input>
                      </span>
                      {validation.contact !== "" && (
                        <div className="explain">{validation.contact}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={`row item ${
                    validation.social !== "" ? "help" : ""
                  }`}
                >
                  <div className="col label col-xs-24 col-sm-8">
                    <label
                      htmlFor="website"
                      title="Website"
                      className="item-required"
                    >
                      Website
                    </label>
                  </div>

                  <div className="col controller-wrapper col-xs-24 col-sm-16">
                    <div
                      className={`item-control ${
                        validation.social !== "" ? "success" : "error"
                      }`}
                    >
                      <span className="item-children">
                        <input
                          className="input"
                          id="website"
                          type="text"
                          required
                          // id="title"
                          value={data.social}
                          name="social"
                          onChange={onInputChange}
                        ></input>
                      </span>
                      {validation.social !== "" && (
                        <div className="explain">{validation.social}</div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="footer">
              <div>
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    hide();
                    // setEmpty();
                  }}
                >
                  <span>Cancel</span>
                </button>

                <button
                  className="btn primary"
                  type="button"
                  onClick={submitHandler}
                >
                  <span>OK</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
