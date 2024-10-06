function FullNameFunc({ fullName, updateFullName }) {
  return (
    <div>
      <label>
        <input
          className="p-1 rounded-md w-full bg-slate-50"
          type="text"
          value={fullName}
          onChange={updateFullName}
        />
      </label>
    </div>
  );
}

function AddressFunc({ address, updateAddress }) {
  return (
    <div>
      <label>
        <input
          className="p-1 rounded-md w-full bg-slate-50"
          type="text"
          value={address}
          onChange={updateAddress}
        />
      </label>
    </div>
  );
}

function PhoneNOFunc({ phoneNo, updatePhoneNo }) {
  return (
    <div>
      <label>
        <input
          className="p-1 rounded-md w-full bg-slate-50"
          type="text"
          value={phoneNo}
          onChange={updatePhoneNo}
        />
      </label>
    </div>
  );
}

function EmailFunc({ email, updateEmail }) {
  return (
    <div>
      <label>
        <input
          className="p-1 rounded-md w-full bg-slate-50"
          type="text"
          value={email}
          onChange={updateEmail}
        />
      </label>
    </div>
  );
}
function GithubFunc({ github, updateGithub }) {
  return (
    <div>
      <label>
        <input
          className="p-1 rounded-md w-full bg-slate-50"
          type="text"
          value={github}
          onChange={updateGithub}
        />
      </label>
    </div>
  );
}
function LinkedInFunc({ linkedIn, updateLinkedIn }) {
  return (
    <div>
      <label>
        <input
          className="p-1 rounded-md w-full bg-slate-50"
          type="text"
          value={linkedIn}
          onChange={updateLinkedIn}
        />
      </label>
    </div>
  );
}

function ObjectiveFunc({ objective, updateObjective }) {
  return (
    <div>
      <label>
        <textarea
          className="p-1 rounded-md w-full bg-slate-50"
          value={objective}
          onChange={updateObjective}
          rows="4"
          cols="50"
        />
      </label>
    </div>
  );
}

// function InputFields({ label, type, onChange, value }) {
//   return (
//     <div>
//       <label>
//         {label}
//         {type === "textarea" ? (
//           <textarea
//             className="p-1 rounded-md w-full bg-slate-50"
//             value={value}
//             onChange={onChange}
//           ></textarea>
//         ) : (
//           <input
//             className="p-1 rounded-md w-full bg-slate-50"
//             type={type}
//             value={value}
//             onChange={onChange}
//           />
//         )}
//       </label>
//     </div>
//   );
// }

// export function Fullname(){

//   return <InputFields type="text"
//   value="fullName"
//   onChange={updateFullName}  />
// }
// export function Address(){}
// export function Phone(){}
// export function Email(){}
// export function Github(){}
// export function LinkedIn(){}
// export function Objective(){}

export {
  FullNameFunc,
  AddressFunc,
  PhoneNOFunc,
  EmailFunc,
  ObjectiveFunc,
  GithubFunc,
  LinkedInFunc,
};
