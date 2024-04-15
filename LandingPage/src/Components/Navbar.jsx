import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center flex-wrap"> {/* Changed flex class to flex-wrap */}
                <div className="flex items-center">
                    <a href="#" className="mr-4">
                        <img alt="Menu" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1IDI0IiBmaWxsPSJub25lIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExNzg3Xzg3NzY3KSI+CjxwYXRoIGQ9Ik00LjUgMTJIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDYuMjVIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDE3Ljc1SDIwLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTc4N184Nzc5OTgiPgogICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+Cg==" width="24" height="24" />
                    </a>
                    <a href="#" className="text-center md:text-left">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" alt="Flipkart" />
                    </a>
                </div>
                <div className="flex-grow">
                    <form action="/search" method="GET" className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                        <button type="submit" className="bg-transparent border-none cursor-pointer p-2 focus:outline-none">
                            <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <input type="text" name="q" autoComplete="off" placeholder="Search for Products, Brands and More" className="p-2 w-full bg-transparent focus:outline-none" />
                        <input type="hidden" name="otracker" value="search" />
                        <input type="hidden" name="otracker1" value="search" />
                        <input type="hidden" name="marketplace" value="FLIPKART" />
                        <input type="hidden" name="as-show" value="off" />
                        <input type="hidden" name="as" value="off" />
                    </form>
                </div>
                <div className="flex items-center">
                    <a href="#" className="flex items-center">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTE1NzBfODc5OTgpIj4KICAgIDxwYXRoIGQ9Ik0xOCAyMC4yNVYzLjc1QzE4IDIuOTIxNTcgMTcuMzI4NCAyLjI1IDE2LjUgMi4yNUw3LjUgMi4yNUM2LjY3MTU3IDIuMjUgNiAyLjkyMTU3IDYgMy43NUw2IDIwLjI1QzYgMjEuMDc4NCA2LjY3MTU3IDIxLjc1IDcuNSAyMS43NUgxNi41QzE3LjMyODQgMjEuNzUgMTggMjEuMDc4NCAxOCAyMC4yNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik0xMiAxMC4xMDU1TDEyIDE3LjYwNTUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik05Ljc1IDE1LjM1NTVMMTIgMTcuNjA1NUwxNC4yNSAxNS4zNTU1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNNC41IDYuMjVIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDwvZz4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcDBfMTE1NzBfODc5OTgiPgogICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+Cg==" alt="Get App" width="24" height="24" />
                    </a>
                    <div className="relative ml-4">
                        <a href="/account/login?ret=/" className="flex items-center">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" className="inline-block -dOa_b L_FVxe" width="24" height="24" />
                            <span className="ml-2">Login</span>
                        </a>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" className="inline-block -dOa_b XdYXbi" width="12" height="12" />
                        <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-10 hidden">
                            <li>
                                <a href="/account/login?signup=true&amp;ret=/" className="block py-2 px-4">New customer? <span className="_1Mikcj">Sign Up</span></a>
                            </li>
                            <li>
                                <a href="/account/?rd=0&amp;link=home_account" className="block py-2 px-4">My Profile</a>
                            </li>
                            <li>
                                <a href="/plus" className="block py-2 px-4">Flipkart Plus Zone</a>
                            </li>
                            <li>
                                <a href="/account/orders?link=home_orders" className="block py-2 px-4">Orders</a>
                            </li>
                            <li>
                                <a href="/wishlist?link=home_wishlist" className="block py-2 px-4">Wishlist</a>
                            </li>
                            <li>
                                <a href="/account/?rd=0&amp;link=home_account" className="block py-2 px-4">My Account</a>
                            </li>
                            <li>
                                <a href="/logout" className="block py-2 px-4">Logout</a>
                            </li>
                        </ul>
                    </div>
                    <a className="ml-4" href="/viewcart?otracker=Cart_Icon_Click">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-600 rounded-full">
                                <svg className="_2fcmoV" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path className="_1bS9ic" d="M3.4,4.1c0.5-1.2,1.6-2.1,2.9-2.1h3.5c1.2,0,2.3,0.8,2.9,2.1l2.7,6.5H0.7L3.4,4.1z M8,9.1c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C10.7,7.9,9.5,9.1,8,9.1z M12,7.1c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6H12z" fill="#000000" fillRule="evenodd" />
                                </svg>
                            </div>
                            <span className="ml-2">Cart</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;