import { NavLink, Outlet } from "react-router-dom";
import { FaAlignJustify, FaHome, FaUtensils, FaBook, FaUsers, FaWallet, FaShoppingCart, FaCalendarAlt } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin ] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />
                {/* Page content here */}

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  ">

                    {
                        isAdmin ? <>
                            <li><NavLink to={'/dashboard/adminHome'}><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/addItem'}><FaUtensils /> Add an Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manageItems'}><FaWallet /> Manage Items</NavLink></li>
                            <li ><NavLink to={'/'}><FaBook /> Manage Bookings (not implemented)</NavLink></li>
                            <li ><NavLink to={'/dashboard/allUsers'}><FaUsers />All Users</NavLink></li>

                        </> : <>

                        </>
                    }

                    {/* Sidebar content here */}
                    <li><NavLink to={'/dashboard/userHome'}><FaHome />Home</NavLink></li>
                    <li><NavLink to={'/'}><FaCalendarAlt /> Reservation</NavLink></li>
                    <li ><NavLink to={'/'}><FaWallet /> Payment History</NavLink></li>
                    <li>
                        <NavLink to={'/dashboard/myCart'}><FaShoppingCart />
                            MyCart
                            <span className="badge inline badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>
                    </li>



                    <div className=" divider"></div>
                    <li><NavLink to={'/'}><FaHome />Home</NavLink></li>
                    <li><NavLink to={'/menu'}> <FaAlignJustify /> Our Menu</NavLink></li>
                    <li><NavLink to={'/order/salad'}> Order Food</NavLink></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;