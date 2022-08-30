import { useState } from "react";
import "../App.css";
import Modal from "./Modal/Modal";
import { people } from "../data";
import HeartButton from "./Buttons/HeartButton";
import EditButton from "./Buttons/EditButton";
import DeleteButton from "./Buttons/DeleteButton";
import HeartButtonLiked from "./Buttons/HeartButtonLiked";
import Email from "./Info/Email";
import Contact from "./Info/Contact";
import Social from "./Info/Social";
import React from "react";
import Image from "./UserImage/Image";

function Grid() {
  const [user, setUser] = useState(people);
  const [modal, setOpenModal] = useState(false);

  const [enteredID, setId] = useState();
  const [enteredName, setName] = useState();
  const [enteredContact, setContact] = useState();
  const [enteredEmail, setEmail] = useState();
  const [enteredSocial, setSocial] = useState();

  function editForm() {
    setOpenModal((prevState) => !prevState);
  }

  const deleteUser = (inputId) => {
    setUser((prevState) =>
      prevState.filter((user) => {
        return user.id !== inputId;
      })
    );
  };

  const sendEditUserData = (data) => {
    setId(data.id);
    setContact(data.contact);
    setEmail(data.email);
    setSocial(data.socialId);
    setName(data.name);
    editForm();
  };

  const likeUser = (inputId) => {
    setUser((prevState) =>
      prevState.map((user) => {
        if (user.id === inputId) {
          if (user.like === 0) {
            return { ...user, like: 1 };
          } else {
            return { ...user, like: 0 };
          }
        }
        return user;
      })
    );
  };

  const updateData = (inputId, data) => {
    setUser((prevState) =>
      prevState.map((user) => {
        if (user.id === inputId) {
          return {
            ...user,
            name: data.name,
            email: data.email,
            contact: data.contact,
            socialId: data.social,
          };
        }
        return user;
      })
    );
  };

  return (
    <div className="App">
      {modal && (
        <Modal
          hide={editForm}
          updateData={updateData}
          inputId={enteredID}
          contact={enteredContact}
          email={enteredEmail}
          social={enteredSocial}
          name={enteredName}
        />
      )}
      {user.map((data) => {
        return (
          <React.Fragment key={data.id}>
            <div
              className="col col-xs-24 col-sm-12 col-md-8 col-lg-8"
              key={data.id}
            >
              <div className="card card-bordered">
                <Image image={data.profile} />
                <div className="card-body">
                  <h3>{data.name}</h3>
                  <Email email={data.email} />
                  <Contact contact={data.contact} />
                  <Social social={data.socialId} />
                </div>
                <ul className="card-actions">
                  {data.like === 0 ? (
                    <HeartButton likeUser={likeUser} inputId={data.id} />
                  ) : (
                    <HeartButtonLiked likeUser={likeUser} inputId={data.id} />
                  )}

                  <EditButton data={data} sendEditUserData={sendEditUserData} />
                  <DeleteButton deleteUser={deleteUser} inputId={data.id} />
                </ul>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Grid;
