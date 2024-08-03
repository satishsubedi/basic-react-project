import React from "react";
import { FemaleAvatar, MaleAvatar } from "../Avatar";

export const Table = ({ userlist }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Avatar</th>
            <th scope="col">Gender</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          {userlist.map((item, i) => (
            // console.log(item);
            // return;
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{item.gender === "m" ? <MaleAvatar /> : <FemaleAvatar />}</td>
              <td>{item.gender}</td>
              <td style={{ color: item.gender === "m" ? "blue" : "pink" }}>
                {item.user}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
