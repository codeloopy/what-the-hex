const popupStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  color: 'black',
  padding: '10px 20px',
  borderRadius: '50px',
  border: '1px solid black',
  zIndex: '1000',
}

export default function CopiedPopup() {
  return (
    <div style={popupStyle}>Copied! 🎉</div>
  )
}
