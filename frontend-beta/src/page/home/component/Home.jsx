// Component
import { Form } from "./form/Form";
import { QRCodeView } from "../component/qr-code/QRCodeView"

function Home() {
    return (
        <>
            <div className="flex justify-center items-center gap-[60px]">
                <Form />
                <QRCodeView />
            </div>
        </>
    )
}

export { Home };