import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <div className="pt-24">
                {children}
            </div>
            <Footer />
        </>
    )
}
