const LightBox = ({ url, open, setOpen }) => {
  return (
    <>
      <div
        className={open ? "dim-active" : "dim"}
        onClick={() => setOpen(false)}
      >
        <img className="lightbox-image" src={url} alt="" />
      </div>
    </>
  );
};
export default LightBox;
