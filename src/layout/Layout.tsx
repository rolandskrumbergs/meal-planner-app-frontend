import { Sheet } from '@mui/joy';

const Layout = ({ children }: { children: React.ReactNode }) => { 
    return (
        <Sheet>
            {children}
        </Sheet>
    )
}

export default Layout;