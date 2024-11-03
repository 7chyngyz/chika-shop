// import React from "react";
// import scss from "./SearchModal.module.scss";
// import { IoCloseOutline } from "react-icons/io5";

// interface SearchModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className={scss.modalOverlay} onClick={onClose}>
//       <div className={scss.modalContent} onClick={(e) => e.stopPropagation()}>
//         <h2>Search</h2>
//         <input type="text" placeholder="What are you looking for?" />
//         <h1 onClick={onClose}>
//           <IoCloseOutline />
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default SearchModal;
