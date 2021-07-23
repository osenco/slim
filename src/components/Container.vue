<template>
  <div
    id="nav"
    class="nav-container d-flex"
    @mouseenter="toggleNav()"
    @mouseleave="toggleNav()"
  >
    <div class="nav-content d-flex">
      <div class="logo position-relative">
        <a href="#">
          <div class="img"></div>
        </a>
      </div>
      <div class="user-container d-flex">
        <a
          href="#"
          class="d-flex user position-relative"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img class="profile" alt="profile" src="/img/profile/profile-8.jpg" />
          <div class="name">Zayn Hartley</div>
        </a>
        <div class="dropdown-menu dropdown-menu-end user-menu wide">
          <div class="row mb-3 ms-0 me-0">
            <div class="col-12 ps-1 mb-2">
              <div class="text-extra-small text-primary">ACCOUNT</div>
            </div>
            <div class="col-6 ps-1 pe-1">
              <ul class="list-unstyled">
                <li>
                  <a href="#">User Info</a>
                </li>
                <li>
                  <a href="#">Preferences</a>
                </li>
                <li>
                  <a href="#">Calendar</a>
                </li>
              </ul>
            </div>
            <div class="col-6 pe-1 ps-1">
              <ul class="list-unstyled">
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Billing</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row mb-1 ms-0 me-0">
            <div class="col-12 p-1 mb-2 pt-2">
              <div class="text-extra-small text-primary">APPLICATION</div>
            </div>
            <div class="col-6 ps-1 pe-1">
              <ul class="list-unstyled">
                <li>
                  <a href="#">Themes</a>
                </li>
                <li>
                  <a href="#">Language</a>
                </li>
              </ul>
            </div>
            <div class="col-6 pe-1 ps-1">
              <ul class="list-unstyled">
                <li>
                  <a href="#">Devices</a>
                </li>
                <li>
                  <a href="#">Storage</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row mb-1 ms-0 me-0">
            <div class="col-12 p-1 mb-3 pt-3">
              <div class="separator-light"></div>
            </div>
            <div class="col-6 ps-1 pe-1">
              <ul class="list-unstyled">
                <li>
                  <a href="#">
                    <i data-cs-icon="help" class="me-2" data-cs-size="17"></i>
                    <span class="align-middle">Help</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      data-cs-icon="file-text"
                      class="me-2"
                      data-cs-size="17"
                    ></i>
                    <span class="align-middle">Docs</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 pe-1 ps-1">
              <ul class="list-unstyled">
                <li>
                  <a href="#">
                    <i data-cs-icon="gear" class="me-2" data-cs-size="17"></i>
                    <span class="align-middle">Settings</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i data-cs-icon="logout" class="me-2" data-cs-size="17"></i>
                    <span class="align-middle">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul class="list-unstyled list-inline text-center menu-icons">
        <li class="list-inline-item">
          <a href="#" data-bs-toggle="modal" data-bs-target="#searchPagesModal">
            <i data-cs-icon="search" class="icon ni ni-search"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#" id="pinButton" class="pin-button">
            <i data-cs-icon="lock-on" class="icon ni ni-lock"></i>
            <i data-cs-icon="lock-off" class="pin"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#" id="colorButton">
            <i data-cs-icon="light-on" class="icon ni ni-light"></i>
            <i data-cs-icon="light-off" class="dark"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a
            href="#"
            data-bs-toggle="dropdown"
            data-bs-target="#notifications"
            aria-haspopup="true"
            aria-expanded="false"
            class="notification-button"
          >
            <div class="position-relative d-inline-flex">
              <i data-cs-icon="bell" class="icon ni ni-bell"></i>
              <span
                class="position-absolute notification-dot rounded-xl"
              ></span>
            </div>
          </a>
          <div
            class="
              dropdown-menu dropdown-menu-end
              wide
              notification-dropdown
              scroll-out
            "
            id="notifications"
          >
            <div class="scroll">
              <ul class="list-unstyled border-last-none">
                <li
                  class="mb-3 pb-3 border-bottom border-separator-light d-flex"
                >
                  <img
                    src="/img/profile/profile-1.jpg"
                    class="me-3 sw-4 sh-4 rounded-xl align-self-center"
                    alt="..."
                  />
                  <div class="align-self-center">
                    <a href="#">Joisse Kaycee just sent a new comment!</a>
                  </div>
                </li>
                <li
                  class="mb-3 pb-3 border-bottom border-separator-light d-flex"
                >
                  <img
                    src="/img/profile/profile-2.jpg"
                    class="me-3 sw-4 sh-4 rounded-xl align-self-center"
                    alt="..."
                  />
                  <div class="align-self-center">
                    <a href="#">New order received! It is total $147,20.</a>
                  </div>
                </li>
                <li
                  class="mb-3 pb-3 border-bottom border-separator-light d-flex"
                >
                  <img
                    src="/img/profile/profile-3.jpg"
                    class="me-3 sw-4 sh-4 rounded-xl align-self-center"
                    alt="..."
                  />
                  <div class="align-self-center">
                    <a href="#">3 items just added to wish list by a user!</a>
                  </div>
                </li>
                <li
                  class="pb-3 pb-3 border-bottom border-separator-light d-flex"
                >
                  <img
                    src="/img/profile/profile-6.jpg"
                    class="me-3 sw-4 sh-4 rounded-xl align-self-center"
                    alt="..."
                  />
                  <div class="align-self-center">
                    <a href="#">Kirby Peters just sent a new message!</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <div class="menu-container flex-grow-1">
        <ul id="menu" class="menu">
          <li>
            <router-link to="/">
              <em class="ni ni-home-alt cs-icon icon" size="18" />
              <span class="label">Dashboard</span>
            </router-link>
          </li>
          <li>
            <a href="#products" data-bs-toggle="collapse">
              <em class="ni ni-cart cs-icon icon" size="18" />
              <span class="label">Products</span>
            </a>
            <ul id="products" class="collapse">
              <li>
                <router-link to="/Products">
                  <span class="label">Products List</span>
                </router-link>
              </li>
              <li>
                <router-link to="/Products/Add">
                  <span class="label">Add New</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#orders" data-bs-toggle="collapse">
              <em class="ni ni-building cs-icon icon" size="18" />
              <span class="label">Orders</span>
            </a>
            <ul id="orders" class="collapse">
              <li>
                <a href="/Orders">
                  <span class="label">Orders List</span>
                </a>
              </li>
              <li>
                <a href="Orders">
                  <span class="label">Detail</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#customers" data-bs-toggle="collapse">
              <em class="ni ni-users cs-icon icon" size="18" />
              <span class="label">Customers</span>
            </a>
            <ul id="customers" class="collapse">
              <li>
                <router-link to="/Customers">
                  <span class="label">Customer List</span>
                </router-link>
              </li>
              <li>
                <a href="/Customers/Add">
                  <span class="label">New Customer</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#storefront" data-bs-toggle="collapse">
              <em class="ni ni-building cs-icon icon" size="18" />
              <span class="label">Storefront</span>
            </a>
            <ul id="storefront" class="collapse">
              <li>
                <a href="Storefront.Home.html">
                  <span class="label">Home</span>
                </a>
              </li>
              <li>
                <a href="Storefront.Filters.html">
                  <span class="label">Filters</span>
                </a>
              </li>
              <li>
                <a href="Storefront.Categories.html">
                  <span class="label">Categories</span>
                </a>
              </li>
              <li>
                <a href="Storefront">
                  <span class="label">Detail</span>
                </a>
              </li>
              <li>
                <a href="Storefront.Cart.html">
                  <span class="label">Cart</span>
                </a>
              </li>
              <li>
                <a href="Storefront.Checkout.html">
                  <span class="label">Checkout</span>
                </a>
              </li>
              <li>
                <a href="Storefront.Invoice.html">
                  <span class="label">Invoice</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="Shipping.html">
              <em class="ni ni-truck cs-icon icon" size="18" />
              <span class="label">Shipping</span>
            </a>
          </li>
          <li>
            <a href="Discount.html">
              <em class="ni ni-tag cs-icon icon"></em>
              <span class="label">Discount</span>
            </a>
          </li>
          <li>
            <router-link to="/Settings">
              <em class="ni ni-setting cs-icon icon"></em>
              <span class="label">Settings</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mobile-buttons-container">
        <a
          href="#"
          id="mobileMenuButton"
          class="menu-button"
          @click="toggleNav()"
        >
          <em class="ni ni-menu cs-icon icon" size="18" />
        </a>
      </div>
    </div>
    <div class="nav-shadow"></div>
  </div>
  <main>
    <slot></slot>
  </main>
  <footer>
    <div class="footer-content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6">
            <p class="mb-0 text-muted text-medium">
              &copy; {{ new Date().getFullYear() }}. All Rights Reserved.
            </p>
          </div>
          <div class="col-sm-6 d-none d-sm-block">
            <ul class="breadcrumb pt-0 pe-0 mb-0 float-end">
              <li class="breadcrumb-item mb-0 text-medium">
                <a href="https://osen.co.ke" target="_blank" class="btn-link">
                  An Osen Concept</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div
    class="modal fade modal-right scroll-out-negative"
    id="settings"
    data-bs-backdrop="true"
    tabindex="-1"
    role="dialog"
    aria-labelledby="settings"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable full" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Theme Settings</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="scroll-track-visible">
            <div class="mb-5" id="color">
              <label class="mb-3 d-inline-block form-label">Color</label>
              <div
                class="row d-flex g-3 justify-content-between flex-wrap mb-3"
              >
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="light-blue"
                  data-parent="color"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow color">
                    <div class="blue-light"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle"
                      >LIGHT BLUE</span
                    >
                  </div>
                </a>
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="dark-blue"
                  data-parent="color"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow color">
                    <div class="blue-dark"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">DARK BLUE</span>
                  </div>
                </a>
              </div>
              <div
                class="row d-flex g-3 justify-content-between flex-wrap mb-3"
              >
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="light-red"
                  data-parent="color"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow color">
                    <div class="red-light"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">LIGHT RED</span>
                  </div>
                </a>
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="dark-red"
                  data-parent="color"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow color">
                    <div class="red-dark"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">DARK RED</span>
                  </div>
                </a>
              </div>
              <div
                class="row d-flex g-3 justify-content-between flex-wrap mb-3"
              >
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="light-green"
                  data-parent="color"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow color">
                    <div class="green-light"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle"
                      >LIGHT GREEN</span
                    >
                  </div>
                </a>
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="dark-green"
                  data-parent="color"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow color">
                    <div class="green-dark"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle"
                      >DARK GREEN</span
                    >
                  </div>
                </a>
              </div>
              <div
                class="row d-flex g-3 justify-content-between flex-wrap mb-3"
              >
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="light-purple"
                  data-parent="color"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow color">
                    <div class="purple-light"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle"
                      >LIGHT PURPLE</span
                    >
                  </div>
                </a>
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="dark-purple"
                  data-parent="color"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow color">
                    <div class="purple-dark"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle"
                      >DARK PURPLE</span
                    >
                  </div>
                </a>
              </div>
              <div
                class="row d-flex g-3 justify-content-between flex-wrap mb-3"
              >
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="light-pink"
                  data-parent="color"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow color">
                    <div class="pink-light"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle"
                      >LIGHT PINK</span
                    >
                  </div>
                </a>
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="dark-pink"
                  data-parent="color"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow color">
                    <div class="pink-dark"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">DARK PINK</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="mb-5" id="navcolor">
              <label class="mb-3 d-inline-block form-label"
                >Override Nav Palette</label
              >
              <div class="row d-flex g-3 justify-content-between flex-wrap">
                <a
                  href="#"
                  class="flex-grow-1 w-33 option col"
                  data-value="default"
                  data-parent="navcolor"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow">
                    <div class="figure figure-primary top"></div>
                    <div class="figure figure-secondary bottom"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">DEFAULT</span>
                  </div>
                </a>
                <a
                  href="#"
                  class="flex-grow-1 w-33 option col"
                  data-value="light"
                  data-parent="navcolor"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow">
                    <div class="figure figure-secondary figure-light top"></div>
                    <div class="figure figure-secondary bottom"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">LIGHT</span>
                  </div>
                </a>
                <a
                  href="#"
                  class="flex-grow-1 w-33 option col"
                  data-value="dark"
                  data-parent="navcolor"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow">
                    <div class="figure figure-muted figure-dark top"></div>
                    <div class="figure figure-secondary bottom"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">DARK</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="mb-5" id="behaviour">
              <label class="mb-3 d-inline-block form-label"
                >Menu Behaviour</label
              >
              <div class="row d-flex g-3 justify-content-between flex-wrap">
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="pinned"
                  data-parent="behaviour"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow">
                    <div class="figure figure-primary left large"></div>
                    <div class="figure figure-secondary right small"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">PINNED</span>
                  </div>
                </a>
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="unpinned"
                  data-parent="behaviour"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow">
                    <div class="figure figure-primary left"></div>
                    <div class="figure figure-secondary right"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">UNPINNED</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="mb-5" id="layout">
              <label class="mb-3 d-inline-block form-label">Layout</label>
              <div class="row d-flex g-3 justify-content-between flex-wrap">
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="fluid"
                  data-parent="layout"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow">
                    <div class="figure figure-primary top"></div>
                    <div class="figure figure-secondary bottom"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">FLUID</span>
                  </div>
                </a>
                <a
                  href="#"
                  class="flex-grow-1 w-50 option col"
                  data-value="boxed"
                  data-parent="layout"
                >
                  <div class="card rounded-md p-3 mb-1 no-shadow">
                    <div class="figure figure-primary top"></div>
                    <div class="figure figure-secondary bottom small"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">BOXED</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="mb-5" id="radius">
              <label class="mb-3 d-inline-block form-label">Radius</label>
              <div class="row d-flex g-3 justify-content-between flex-wrap">
                <a
                  href="#"
                  class="flex-grow-1 w-33 option col"
                  data-value="rounded"
                  data-parent="radius"
                >
                  <div
                    class="card rounded-md radius-rounded p-3 mb-1 no-shadow"
                  >
                    <div class="figure figure-primary top"></div>
                    <div class="figure figure-secondary bottom"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">ROUNDED</span>
                  </div>
                </a>
                <a
                  href="#"
                  class="flex-grow-1 w-33 option col"
                  data-value="standard"
                  data-parent="radius"
                >
                  <div
                    class="card rounded-md radius-regular p-3 mb-1 no-shadow"
                  >
                    <div class="figure figure-primary top"></div>
                    <div class="figure figure-secondary bottom"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">STANDARD</span>
                  </div>
                </a>
                <a
                  href="#"
                  class="flex-grow-1 w-33 option col"
                  data-value="flat"
                  data-parent="radius"
                >
                  <div class="card rounded-md radius-flat p-3 mb-1 no-shadow">
                    <div class="figure figure-primary top"></div>
                    <div class="figure figure-secondary bottom"></div>
                  </div>
                  <div class="text-muted text-part">
                    <span class="text-extra-small align-middle">FLAT</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade modal-right scroll-out-negative"
    id="niches"
    data-bs-backdrop="true"
    tabindex="-1"
    role="dialog"
    aria-labelledby="niches"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable full" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Niches</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="scroll-track-visible">
            <div class="mb-5">
              <label class="mb-2 d-inline-block form-label"
                >Classic Dashboard</label
              >
              <div
                class="
                  hover-reveal-buttons
                  position-relative
                  hover-reveal
                  cursor-default
                "
              >
                <div class="position-relative mb-3 mb-lg-5 rounded-sm">
                  <img
                    src="/img/page/classic-dashboard.jpg"
                    class="
                      img-fluid
                      rounded-sm
                      lower-opacity
                      border border-separator-light
                    "
                    alt="card image"
                  />
                  <div
                    class="
                      position-absolute
                      reveal-content
                      rounded-sm
                      absolute-center-vertical
                      text-center
                      w-100
                    "
                  >
                    <a
                      target="_blank"
                      href="https://acorn-html-classic-dashboard.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      Html
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-laravel-classic-dashboard.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      Laravel
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-dotnet-classic-dashboard.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      .Net5
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <label class="mb-2 d-inline-block form-label"
                >Ecommerce Platform</label
              >
              <div
                class="
                  hover-reveal-buttons
                  position-relative
                  hover-reveal
                  cursor-default
                "
              >
                <div class="position-relative mb-3 mb-lg-5 rounded-sm">
                  <img
                    src="/img/page/ecommerce-platform.jpg"
                    class="
                      img-fluid
                      rounded-sm
                      lower-opacity
                      border border-separator-light
                    "
                    alt="card image"
                  />
                  <div
                    class="
                      position-absolute
                      reveal-content
                      rounded-sm
                      absolute-center-vertical
                      text-center
                      w-100
                    "
                  >
                    <a
                      target="_blank"
                      href="index.html"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      Html
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-laravel-ecommerce-platform.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      Laravel
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-dotnet-ecommerce-platform.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      .Net5
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <label class="mb-2 d-inline-block form-label"
                >Elearning Portal</label
              >
              <div
                class="
                  hover-reveal-buttons
                  position-relative
                  hover-reveal
                  cursor-default
                "
              >
                <div class="position-relative mb-3 mb-lg-5 rounded-sm">
                  <img
                    src="/img/page/elearning-portal.jpg"
                    class="
                      img-fluid
                      rounded-sm
                      lower-opacity
                      border border-separator-light
                    "
                    alt="card image"
                  />
                  <div
                    class="
                      position-absolute
                      reveal-content
                      rounded-sm
                      absolute-center-vertical
                      text-center
                      w-100
                    "
                  >
                    <a
                      target="_blank"
                      href="https://acorn-html-elearning-portal.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      Html
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-laravel-elearning-portal.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      Laravel
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-dotnet-elearning-portal.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      .Net5
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <label class="mb-2 d-inline-block form-label"
                >Service Provider</label
              >
              <div
                class="
                  hover-reveal-buttons
                  position-relative
                  hover-reveal
                  cursor-default
                "
              >
                <div class="position-relative mb-3 mb-lg-5 rounded-sm">
                  <img
                    src="/img/page/service-provider.jpg"
                    class="
                      img-fluid
                      rounded-sm
                      lower-opacity
                      border border-separator-light
                    "
                    alt="card image"
                  />
                  <div
                    class="
                      position-absolute
                      reveal-content
                      rounded-sm
                      absolute-center-vertical
                      text-center
                      w-100
                    "
                  >
                    <a
                      target="_blank"
                      href="https://acorn-html-service-provider.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      Html
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-laravel-service-provider.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      Laravel
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-dotnet-service-provider.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      .Net5
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <label class="mb-2 d-inline-block form-label"
                >Starter Project</label
              >
              <div
                class="
                  hover-reveal-buttons
                  position-relative
                  hover-reveal
                  cursor-default
                "
              >
                <div class="position-relative mb-3 mb-lg-5 rounded-sm">
                  <img
                    src="/img/page/starter-project.jpg"
                    class="
                      img-fluid
                      rounded-sm
                      lower-opacity
                      border border-separator-light
                    "
                    alt="card image"
                  />
                  <div
                    class="
                      position-absolute
                      reveal-content
                      rounded-sm
                      absolute-center-vertical
                      text-center
                      w-100
                    "
                  >
                    <a
                      target="_blank"
                      href="https://acorn-html-starter-project.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      Html
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-laravel-starter-project.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      Laravel
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-dotnet-starter-project.coloredstrategies.com/"
                      class="
                        btn btn-primary btn-sm
                        sw-10 sw-lg-12
                        d-block
                        mx-auto
                        my-1
                      "
                    >
                      .Net5
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="settings-buttons-container">
    <button
      type="button"
      class="btn settings-button btn-primary p-0"
      data-bs-toggle="modal"
      data-bs-target="#settings"
      id="settingsButton"
    >
      <span
        class="d-inline-block no-delay"
        data-bs-delay="0"
        data-bs-offset="0,3"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Settings"
      >
        <i data-cs-icon="paint-roller" class="position-relative"></i>
      </span>
    </button>
    <button
      type="button"
      class="btn settings-button btn-primary p-0"
      data-bs-toggle="modal"
      data-bs-target="#niches"
      id="nichesButton"
    >
      <span
        class="d-inline-block no-delay"
        data-bs-delay="0"
        data-bs-offset="0,3"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Niches"
      >
        <i data-cs-icon="toy" class="position-relative"></i>
      </span>
    </button>
    <a
      href="https://1.envato.market/BX5oGy"
      target="_blank"
      class="btn settings-button btn-primary p-0"
      id="purchaseButton"
    >
      <span
        class="d-inline-block no-delay"
        data-bs-delay="0"
        data-bs-offset="0,3"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Purchase"
      >
        <i data-cs-icon="cart" class="position-relative"></i>
      </span>
    </a>
  </div>
  <div
    class="modal fade modal-under-nav modal-search modal-close-out"
    id="searchPagesModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header border-0 p-0">
          <button
            type="button"
            class="btn-close btn btn-icon btn-icon-only btn-foreground"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body ps-5 pe-5 pb-0 border-0">
          <input
            id="searchPagesInput"
            class="
              form-control form-control-xl
              borderless
              ps-0
              pe-0
              mb-1
              auto-complete
            "
            type="text"
            autocomplete="off"
          />
        </div>
        <div
          class="
            modal-footer
            border-top
            justify-content-start
            ps-5
            pe-5
            pb-3
            pt-3
            border-0
          "
        >
          <span class="text-alternate d-inline-block m-0 me-3">
            <i
              data-cs-icon="arrow-bottom"
              data-cs-size="15"
              class="text-alternate align-middle me-1"
            ></i>
            <span class="align-middle text-medium">Navigate</span>
          </span>
          <span class="text-alternate d-inline-block m-0 me-3">
            <i
              data-cs-icon="arrow-bottom-left"
              data-cs-size="15"
              class="text-alternate align-middle me-1"
            ></i>
            <span class="align-middle text-medium">Select</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      open: true,
    });

    function toggleNav() {
      state.open = !state.open;
      document.documentElement.setAttribute(
        "data-menu-animate",
        state.open ? "hidden" : "show"
      );

      if (state.open) {
        document
          .getElementById("nav")
          ?.classList.add("mobile-side-ready", "mobile-side-in");
      }
    }

    return { toggleNav, state };
  },
});
</script>