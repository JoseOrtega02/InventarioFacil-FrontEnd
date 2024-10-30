import { Button } from "primereact/button"
import { Divider } from "primereact/divider"

function Footer() {
  return (
    <footer style={{ padding: '2rem', textAlign: 'center' }}>
      <div>
        <p style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>Inventario Facil {new Date().getFullYear()}</p>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Button icon="pi pi-facebook" className="p-button-rounded p-button-text" aria-label="Facebook" />
          <Button icon="pi pi-twitter" className="p-button-rounded p-button-text" aria-label="Twitter" />
          <Button icon="pi pi-instagram" className="p-button-rounded p-button-text" aria-label="Instagram" />
          <Button icon="pi pi-linkedin" className="p-button-rounded p-button-text" aria-label="LinkedIn" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
