import React from "react";

export  function NavigationComponent(){
    return(
        <div className="navigation__block">
            <div className="navigation__profile">
                <div className="navigation__emblem"><svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18.392C13.5215 19.2607 11.8397 19.7234 10.1249 19.7332C8.41006 19.743 6.72309 19.2995 5.23474 18.4478C3.74639 17.596 2.50949 16.3662 1.64924 14.8827C0.788992 13.3992 0.335938 11.7148 0.335938 10C0.335938 8.28515 0.788992 6.60075 1.64924 5.11729C2.50949 3.63382 3.74639 2.40397 5.23474 1.55221C6.72309 0.700449 8.41006 0.257025 10.1249 0.266821C11.8397 0.276618 13.5215 0.739288 15 1.608C16.4785 0.739288 18.1603 0.276618 19.8751 0.266821C21.5899 0.257025 23.2769 0.700449 24.7653 1.55221C26.2536 2.40397 27.4905 3.63382 28.3508 5.11729C29.211 6.60075 29.6641 8.28515 29.6641 10C29.6641 11.7148 29.211 13.3992 28.3508 14.8827C27.4905 16.3662 26.2536 17.596 24.7653 18.4478C23.2769 19.2995 21.5899 19.743 19.8751 19.7332C18.1603 19.7234 16.4785 19.2607 15 18.392V18.392ZM17.2693 16.5467C18.3422 16.9827 19.5059 17.1484 20.6578 17.0291C21.8098 16.9098 22.9148 16.5092 23.8756 15.8626C24.8364 15.2159 25.6235 14.3431 26.1678 13.3208C26.712 12.2985 26.9966 11.1581 26.9966 10C26.9966 8.84187 26.712 7.70149 26.1678 6.6792C25.6235 5.65692 24.8364 4.78406 23.8756 4.13742C22.9148 3.49079 21.8098 3.0902 20.6578 2.97092C19.5059 2.85163 18.3422 3.01729 17.2693 3.45333C18.9007 5.24302 19.8035 7.57834 19.8 10C19.8 12.52 18.8413 14.8187 17.2693 16.5467ZM12.7307 3.45333C11.6578 3.01729 10.4941 2.85163 9.34217 2.97092C8.1902 3.0902 7.0852 3.49079 6.12441 4.13742C5.16362 4.78406 4.37648 5.65692 3.83224 6.6792C3.28801 7.70149 3.00338 8.84187 3.00338 10C3.00338 11.1581 3.28801 12.2985 3.83224 13.3208C4.37648 14.3431 5.16362 15.2159 6.12441 15.8626C7.0852 16.5092 8.1902 16.9098 9.34217 17.0291C10.4941 17.1484 11.6578 16.9827 12.7307 16.5467C11.0993 14.757 10.1965 12.4217 10.2 10C10.2 7.48 11.1587 5.18133 12.7307 3.45333ZM15 4.94C14.3238 5.59765 13.7865 6.3844 13.4201 7.25359C13.0536 8.12278 12.8654 9.05671 12.8667 10C12.8667 11.984 13.684 13.776 15 15.06C15.6762 14.4023 16.2135 13.6156 16.5799 12.7464C16.9464 11.8772 17.1346 10.9433 17.1333 10C17.1346 9.05671 16.9464 8.12278 16.5799 7.25359C16.2135 6.3844 15.6762 5.59765 15 4.94V4.94Z" fill="#27AE60"/>
                </svg>
                </div>
                <div className="navigation__foto__profile"><img src="/Img/FotoUser.png"/></div>

            </div>
            <div className="navigation__logout"><img src="/Img/LogOut.png"/></div>

        </div>
    )
}