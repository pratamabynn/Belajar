/* eslint-disable react/prop-types */
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const TextEditor = ({
  value,
  name,
  onChange,
  customFooter,
  onBlur,
  disabled,
}) => {
  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["clean"],
  ];

  return (
    <div>
      <ReactQuill
        readOnly={disabled}
        placeholder="Masukkan pesan anda disini"
        name={name}
        theme="snow"
        value={value}
        onChange={(content) => {
          onChange(content);
        }}
        onBlur={onBlur}
        modules={{
          toolbar: toolbarOptions,
        }}
        className="h-64"
      />
      <div className="flex justify-between">
        <div></div>
        {customFooter && customFooter}
      </div>
    </div>
  );
};

export default TextEditor;
