<template>
  <container>
    <div class="container">
      <div class="page-title-container">
        <div class="row">
          <div class="col-12 col-md-7">
            <a class="muted-link pb-2 d-inline-block hidden" href="#">
              <span class="align-middle lh-1 text-small">&nbsp;</span>
            </a>
            <h1 class="mb-0 pb-0 display-4" id="title">Welcome, Zayn!</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="d-flex">
            <div
              class="dropdown-as-select me-3"
              data-setactive="false"
              data-childselector="span"
            >
              <a
                class="pe-0 pt-0 align-top lh-1 dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="small-title"></span>
              </a>
              <div class="dropdown-menu font-standard">
                <div class="nav flex-column" role="tablist">
                  <a
                    class="active dropdown-item text-medium"
                    href="#"
                    aria-selected="true"
                    role="tab"
                    >Today's</a
                  >
                  <a
                    class="dropdown-item text-medium"
                    href="#"
                    aria-selected="false"
                    role="tab"
                    >Weekly</a
                  >
                  <a
                    class="dropdown-item text-medium"
                    href="#"
                    aria-selected="false"
                    role="tab"
                    >Monthly</a
                  >
                  <a
                    class="dropdown-item text-medium"
                    href="#"
                    aria-selected="false"
                    role="tab"
                    >Yearly</a
                  >
                </div>
              </div>
            </div>
            <h2 class="small-title">Stats</h2>
          </div>
          <div class="mb-5">
            <div class="row g-2">
              <div class="col-6 col-md-4 col-lg-2">
                <div class="card h-100 hover-scale-up cursor-pointer">
                  <div class="card-body d-flex flex-column align-items-center">
                    <div
                      class="
                        sw-6
                        sh-6
                        rounded-xl
                        d-flex
                        justify-content-center
                        align-items-center
                        border border-primary
                        mb-4
                      "
                    >
                      <i data-cs-icon="dollar" class="text-primary"></i>
                    </div>
                    <div
                      class="
                        mb-1
                        d-flex
                        align-items-center
                        text-alternate text-small
                        lh-1-25
                      "
                    >
                      EARNINGS
                    </div>
                    <div class="text-primary cta-4">$ 315.20</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                <div class="card h-100 hover-scale-up cursor-pointer">
                  <div class="card-body d-flex flex-column align-items-center">
                    <div
                      class="
                        sw-6
                        sh-6
                        rounded-xl
                        d-flex
                        justify-content-center
                        align-items-center
                        border border-primary
                        mb-4
                      "
                    >
                      <i data-cs-icon="cart" class="text-primary"></i>
                    </div>
                    <div
                      class="
                        mb-1
                        d-flex
                        align-items-center
                        text-alternate text-small
                        lh-1-25
                      "
                    >
                      ORDERS
                    </div>
                    <div class="text-primary cta-4">16</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                <div class="card h-100 hover-scale-up cursor-pointer">
                  <div class="card-body d-flex flex-column align-items-center">
                    <div
                      class="
                        sw-6
                        sh-6
                        rounded-xl
                        d-flex
                        justify-content-center
                        align-items-center
                        border border-primary
                        mb-4
                      "
                    >
                      <i data-cs-icon="server" class="text-primary"></i>
                    </div>
                    <div
                      class="
                        mb-1
                        d-flex
                        align-items-center
                        text-alternate text-small
                        lh-1-25
                      "
                    >
                      SESSIONS
                    </div>
                    <div class="text-primary cta-4">463</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                <div class="card h-100 hover-scale-up cursor-pointer">
                  <div class="card-body d-flex flex-column align-items-center">
                    <div
                      class="
                        sw-6
                        sh-6
                        rounded-xl
                        d-flex
                        justify-content-center
                        align-items-center
                        border border-primary
                        mb-4
                      "
                    >
                      <i data-cs-icon="user" class="text-primary"></i>
                    </div>
                    <div
                      class="
                        mb-1
                        d-flex
                        align-items-center
                        text-alternate text-small
                        lh-1-25
                      "
                    >
                      USERS
                    </div>
                    <div class="text-primary cta-4">17</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                <div class="card h-100 hover-scale-up cursor-pointer">
                  <div class="card-body d-flex flex-column align-items-center">
                    <div
                      class="
                        sw-6
                        sh-6
                        rounded-xl
                        d-flex
                        justify-content-center
                        align-items-center
                        border border-primary
                        mb-4
                      "
                    >
                      <i data-cs-icon="arrow-top-left" class="text-primary"></i>
                    </div>
                    <div
                      class="
                        mb-1
                        d-flex
                        align-items-center
                        text-alternate text-small
                        lh-1-25
                      "
                    >
                      RETURNS
                    </div>
                    <div class="text-primary cta-4">2</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                <div class="card h-100 hover-scale-up cursor-pointer">
                  <div class="card-body d-flex flex-column align-items-center">
                    <div
                      class="
                        sw-6
                        sh-6
                        rounded-xl
                        d-flex
                        justify-content-center
                        align-items-center
                        border border-primary
                        mb-4
                      "
                    >
                      <i data-cs-icon="message" class="text-primary"></i>
                    </div>
                    <div
                      class="
                        mb-1
                        d-flex
                        align-items-center
                        text-alternate text-small
                        lh-1-25
                      "
                    >
                      COMMENTS
                    </div>
                    <div class="text-primary cta-4">5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 mb-5">
          <h2 class="small-title">Recent Orders</h2>
          <div class="mb-n2 scroll-out">
            <div class="scroll-by-count" data-count="6">
              <div class="card mb-2 sh-15 sh-md-6">
                <div class="card-body pt-0 pb-0 h-100">
                  <div class="row g-0 h-100 align-content-center">
                    <div
                      class="
                        col-10 col-md-4
                        d-flex
                        align-items-center
                        mb-3 mb-md-0
                        h-md-100
                      "
                    >
                      <a
                        href="Orders.Detail.html"
                        class="body-link stretched-link"
                        >Order #54129</a
                      >
                    </div>
                    <div
                      class="
                        col-2 col-md-3
                        d-flex
                        align-items-center
                        text-muted
                        mb-1 mb-md-0
                        justify-content-end justify-content-md-start
                      "
                    >
                      <span class="badge bg-outline-primary me-1">PENDING</span>
                    </div>
                    <div
                      class="
                        col-12 col-md-2
                        d-flex
                        align-items-center
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      <span>
                        <span class="text-small">$</span>
                        17.35
                      </span>
                    </div>
                    <div
                      class="
                        col-12 col-md-3
                        d-flex
                        align-items-center
                        justify-content-md-end
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      Today - 13:20
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2 sh-15 sh-md-6">
                <div class="card-body pt-0 pb-0 h-100">
                  <div class="row g-0 h-100 align-content-center">
                    <div
                      class="
                        col-10 col-md-4
                        d-flex
                        align-items-center
                        mb-3 mb-md-0
                        h-md-100
                      "
                    >
                      <a
                        href="Orders.Detail.html"
                        class="body-link stretched-link"
                        >Order #54128</a
                      >
                    </div>
                    <div
                      class="
                        col-2 col-md-3
                        d-flex
                        align-items-center
                        text-muted
                        mb-1 mb-md-0
                        justify-content-end justify-content-md-start
                      "
                    >
                      <span class="badge bg-outline-primary me-1">PENDING</span>
                    </div>
                    <div
                      class="
                        col-12 col-md-2
                        d-flex
                        align-items-center
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      <span>
                        <span class="text-small">$</span>
                        145.20
                      </span>
                    </div>
                    <div
                      class="
                        col-12 col-md-3
                        d-flex
                        align-items-center
                        justify-content-md-end
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      Today - 11:32
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2 sh-15 sh-md-6">
                <div class="card-body pt-0 pb-0 h-100">
                  <div class="row g-0 h-100 align-content-center">
                    <div
                      class="
                        col-10 col-md-4
                        d-flex
                        align-items-center
                        mb-3 mb-md-0
                        h-md-100
                      "
                    >
                      <a
                        href="Orders.Detail.html"
                        class="body-link stretched-link"
                        >Order #54127</a
                      >
                    </div>
                    <div
                      class="
                        col-2 col-md-3
                        d-flex
                        align-items-center
                        text-muted
                        mb-1 mb-md-0
                        justify-content-end justify-content-md-start
                      "
                    >
                      <span class="badge bg-outline-primary me-1">PENDING</span>
                    </div>
                    <div
                      class="
                        col-12 col-md-2
                        d-flex
                        align-items-center
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      <span>
                        <span class="text-small">$</span>
                        110.85
                      </span>
                    </div>
                    <div
                      class="
                        col-12 col-md-3
                        d-flex
                        align-items-center
                        justify-content-md-end
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      Today - 11:20
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2 sh-15 sh-md-6">
                <div class="card-body pt-0 pb-0 h-100">
                  <div class="row g-0 h-100 align-content-center">
                    <div
                      class="
                        col-10 col-md-4
                        d-flex
                        align-items-center
                        mb-3 mb-md-0
                        h-md-100
                      "
                    >
                      <a
                        href="Orders.Detail.html"
                        class="body-link stretched-link"
                        >Order #54126</a
                      >
                    </div>
                    <div
                      class="
                        col-2 col-md-3
                        d-flex
                        align-items-center
                        text-muted
                        mb-1 mb-md-0
                        justify-content-end justify-content-md-start
                      "
                    >
                      <span class="badge bg-outline-primary me-1">PENDING</span>
                    </div>
                    <div
                      class="
                        col-12 col-md-2
                        d-flex
                        align-items-center
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      <span>
                        <span class="text-small">$</span>
                        58.00
                      </span>
                    </div>
                    <div
                      class="
                        col-12 col-md-3
                        d-flex
                        align-items-center
                        justify-content-md-end
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      Today - 10:20
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2 sh-15 sh-md-6">
                <div class="card-body pt-0 pb-0 h-100">
                  <div class="row g-0 h-100 align-content-center">
                    <div
                      class="
                        col-10 col-md-4
                        d-flex
                        align-items-center
                        mb-3 mb-md-0
                        h-md-100
                      "
                    >
                      <a
                        href="Orders.Detail.html"
                        class="body-link stretched-link"
                        >Order #54125</a
                      >
                    </div>
                    <div
                      class="
                        col-2 col-md-3
                        d-flex
                        align-items-center
                        text-muted
                        mb-1 mb-md-0
                        justify-content-end justify-content-md-start
                      "
                    >
                      <span class="badge bg-outline-secondary me-1"
                        >SHIPPED</span
                      >
                    </div>
                    <div
                      class="
                        col-12 col-md-2
                        d-flex
                        align-items-center
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      <span>
                        <span class="text-small">$</span>
                        22.05
                      </span>
                    </div>
                    <div
                      class="
                        col-12 col-md-3
                        d-flex
                        align-items-center
                        justify-content-md-end
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      Today - 07:30
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2 sh-15 sh-md-6">
                <div class="card-body pt-0 pb-0 h-100">
                  <div class="row g-0 h-100 align-content-center">
                    <div
                      class="
                        col-10 col-md-4
                        d-flex
                        align-items-center
                        mb-3 mb-md-0
                        h-md-100
                      "
                    >
                      <a
                        href="Orders.Detail.html"
                        class="body-link stretched-link"
                        >Order #54124</a
                      >
                    </div>
                    <div
                      class="
                        col-2 col-md-3
                        d-flex
                        align-items-center
                        text-muted
                        mb-1 mb-md-0
                        justify-content-end justify-content-md-start
                      "
                    >
                      <span class="badge bg-outline-secondary me-1"
                        >SHIPPED</span
                      >
                    </div>
                    <div
                      class="
                        col-12 col-md-2
                        d-flex
                        align-items-center
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      <span>
                        <span class="text-small">$</span>
                        14.25
                      </span>
                    </div>
                    <div
                      class="
                        col-12 col-md-3
                        d-flex
                        align-items-center
                        justify-content-md-end
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      Monday - 17:30
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2 sh-15 sh-md-6">
                <div class="card-body pt-0 pb-0 h-100">
                  <div class="row g-0 h-100 align-content-center">
                    <div
                      class="
                        col-10 col-md-4
                        d-flex
                        align-items-center
                        mb-3 mb-md-0
                        h-md-100
                      "
                    >
                      <a
                        href="Orders.Detail.html"
                        class="body-link stretched-link"
                        >Order #54123</a
                      >
                    </div>
                    <div
                      class="
                        col-2 col-md-3
                        d-flex
                        align-items-center
                        text-muted
                        mb-1 mb-md-0
                        justify-content-end justify-content-md-start
                      "
                    >
                      <span class="badge bg-outline-quaternary me-1"
                        >DELIVERED</span
                      >
                    </div>
                    <div
                      class="
                        col-12 col-md-2
                        d-flex
                        align-items-center
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      <span>
                        <span class="text-small">$</span>
                        42.00
                      </span>
                    </div>
                    <div
                      class="
                        col-12 col-md-3
                        d-flex
                        align-items-center
                        justify-content-md-end
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      Monday - 11:25
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2 sh-15 sh-md-6">
                <div class="card-body pt-0 pb-0 h-100">
                  <div class="row g-0 h-100 align-content-center">
                    <div
                      class="
                        col-10 col-md-4
                        d-flex
                        align-items-center
                        mb-3 mb-md-0
                        h-md-100
                      "
                    >
                      <a
                        href="Orders.Detail.html"
                        class="body-link stretched-link"
                        >Order #54122</a
                      >
                    </div>
                    <div
                      class="
                        col-2 col-md-3
                        d-flex
                        align-items-center
                        text-muted
                        mb-1 mb-md-0
                        justify-content-end justify-content-md-start
                      "
                    >
                      <span class="badge bg-outline-quaternary me-1"
                        >DELIVERED</span
                      >
                    </div>
                    <div
                      class="
                        col-12 col-md-2
                        d-flex
                        align-items-center
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      <span>
                        <span class="text-small">$</span>
                        63.25
                      </span>
                    </div>
                    <div
                      class="
                        col-12 col-md-3
                        d-flex
                        align-items-center
                        justify-content-md-end
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      Monday - 15:20
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2 sh-15 sh-md-6">
                <div class="card-body pt-0 pb-0 h-100">
                  <div class="row g-0 h-100 align-content-center">
                    <div
                      class="
                        col-10 col-md-4
                        d-flex
                        align-items-center
                        mb-3 mb-md-0
                        h-md-100
                      "
                    >
                      <a
                        href="Orders.Detail.html"
                        class="body-link stretched-link"
                        >Order #54121</a
                      >
                    </div>
                    <div
                      class="
                        col-2 col-md-3
                        d-flex
                        align-items-center
                        text-muted
                        mb-1 mb-md-0
                        justify-content-end justify-content-md-start
                      "
                    >
                      <span class="badge bg-outline-quaternary me-1"
                        >DELIVERED</span
                      >
                    </div>
                    <div
                      class="
                        col-12 col-md-2
                        d-flex
                        align-items-center
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      <span>
                        <span class="text-small">$</span>
                        74.00
                      </span>
                    </div>
                    <div
                      class="
                        col-12 col-md-3
                        d-flex
                        align-items-center
                        justify-content-md-end
                        mb-1 mb-md-0
                        text-alternate
                      "
                    >
                      Monday - 13:10
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 mb-5">
          <div class="d-flex">
            <div
              class="dropdown-as-select me-3"
              data-setactive="false"
              data-childselector="span"
            >
              <a
                class="pe-0 pt-0 align-top lh-1 dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="small-title"></span>
              </a>
              <div class="dropdown-menu font-standard">
                <div class="nav flex-column" role="tablist">
                  <a
                    class="active dropdown-item text-medium"
                    href="#"
                    aria-selected="true"
                    role="tab"
                    >Today's</a
                  >
                  <a
                    class="dropdown-item text-medium"
                    href="#"
                    aria-selected="false"
                    role="tab"
                    >Weekly</a
                  >
                  <a
                    class="dropdown-item text-medium"
                    href="#"
                    aria-selected="false"
                    role="tab"
                    >Monthly</a
                  >
                  <a
                    class="dropdown-item text-medium"
                    href="#"
                    aria-selected="false"
                    role="tab"
                    >Yearly</a
                  >
                </div>
              </div>
            </div>
            <h2 class="small-title">Performance</h2>
          </div>
          <div class="card sh-45 h-xl-100-card">
            <div class="card-body h-100">
              <div class="h-100">
                <canvas id="horizontalTooltipChart"></canvas>
                <div
                  class="
                    custom-tooltip
                    position-absolute
                    bg-foreground
                    rounded-md
                    border border-separator
                    pe-none
                    p-3
                    d-flex
                    z-index-1
                    align-items-center
                    opacity-0
                    basic-transform-transition
                  "
                >
                  <div
                    class="
                      icon-container
                      border
                      d-flex
                      align-middle align-items-center
                      justify-content-center
                      align-self-center
                      rounded-xl
                      sh-5
                      sw-5
                      rounded-xl
                      me-3
                    "
                  >
                    <span class="icon"></span>
                  </div>
                  <div>
                    <span
                      class="
                        text
                        d-flex
                        align-middle
                        text-alternate
                        align-items-center
                        text-small
                      "
                      >Bread</span
                    >
                    <span
                      class="
                        value
                        d-flex
                        align-middle
                        text-body
                        align-items-center
                        cta-4
                      "
                      >300</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-xxl-auto mb-1">
          <div class="card h-100-card sw-xxl-40">
            <div class="card-body row g-0">
              <div
                class="
                  col-12
                  d-flex
                  flex-column
                  justify-content-between
                  align-items-start
                "
              >
                <div>
                  <div class="cta-3">More sales?</div>
                  <div class="mb-3 cta-3 text-primary">Add new products!</div>
                  <div class="text-muted mb-4">
                    Cheesecake chocolate carrot cake pie lollipop apple pie
                    lemon cream lollipop.
                    <br />
                    Oat cake lemon drops gummi pie cake cotton.
                  </div>
                </div>
                <router-link
                  to="/Products"
                  class="
                    btn btn-icon btn-icon-start btn-outline-primary
                    stretched-link
                    mb-4
                  "
                >
                  <i data-cs-icon="plus"></i>
                  <span>Add Products</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row gx-4 gy-5">
        <div class="col-xl-6">
          <h2 class="small-title">Top Selling Items</h2>
          <div class="scroll-out mb-n2">
            <div class="scroll-by-count" data-count="4">
              <div class="card mb-2">
                <div class="row g-0 sh-14 sh-md-10">
                  <div class="col-auto">
                    <a href="Products.Detail.html">
                      <img
                        src="img/product/small/panettone.jpg"
                        alt="user"
                        class="card-img card-img-horizontal sw-11"
                      />
                    </a>
                  </div>
                  <div class="col">
                    <div class="card-body pt-0 pb-0 h-100">
                      <div class="row g-0 h-100 align-content-center">
                        <div
                          class="
                            col-12 col-md-6
                            d-flex
                            align-items-center
                            mb-2 mb-md-0
                          "
                        >
                          <a href="Products.Detail.html">Cholermüs</a>
                        </div>
                        <div
                          class="
                            col-12 col-md-3
                            d-flex
                            align-items-center
                            text-muted text-medium
                          "
                        >
                          Multigrain
                        </div>
                        <div
                          class="
                            col-12 col-md-3
                            d-flex
                            align-items-center
                            justify-content-md-end
                            text-muted text-medium
                          "
                        >
                          4.024 Sales
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2">
                <div class="row g-0 sh-14 sh-md-10">
                  <div class="col-auto">
                    <a href="Products.Detail.html">
                      <img
                        src="img/product/small/cornbread.jpg"
                        alt="user"
                        class="card-img card-img-horizontal sw-11"
                      />
                    </a>
                  </div>
                  <div class="col">
                    <div class="card-body pt-0 pb-0 h-100">
                      <div class="row g-0 h-100 align-content-center">
                        <div
                          class="
                            col-12 col-md-6
                            d-flex
                            align-items-center
                            mb-2 mb-md-0
                          "
                        >
                          <a href="Products.Detail.html">Ruisreikäleipä</a>
                        </div>
                        <div
                          class="
                            col-12 col-md-3
                            d-flex
                            align-items-center
                            text-muted text-medium
                          "
                        >
                          Sourdough
                        </div>
                        <div
                          class="
                            col-12 col-md-3
                            d-flex
                            align-items-center
                            justify-content-md-end
                            text-muted text-medium
                          "
                        >
                          2.701 Sales
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2">
                <div class="row g-0 sh-14 sh-md-10">
                  <div class="col-auto">
                    <a href="Products.Detail.html">
                      <img
                        src="img/product/small/boule.jpg"
                        alt="user"
                        class="card-img card-img-horizontal sw-11"
                      />
                    </a>
                  </div>
                  <div class="col">
                    <div class="card-body pt-0 pb-0 h-100">
                      <div class="row g-0 h-100 align-content-center">
                        <div
                          class="
                            col-12 col-md-6
                            d-flex
                            align-items-center
                            mb-2 mb-md-0
                          "
                        >
                          <a href="Products.Detail.html">Barmbrack</a>
                        </div>
                        <div
                          class="
                            col-12 col-md-3
                            d-flex
                            align-items-center
                            text-muted text-medium
                          "
                        >
                          Whole Wheat
                        </div>
                        <div
                          class="
                            col-12 col-md-3
                            d-flex
                            align-items-center
                            justify-content-md-end
                            text-muted text-medium
                          "
                        >
                          1.972 Sales
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2">
                <div class="row g-0 sh-14 sh-md-10">
                  <div class="col-auto">
                    <a href="Products.Detail.html">
                      <img
                        src="img/product/small/zopf.jpg"
                        alt="user"
                        class="card-img card-img-horizontal sw-11"
                      />
                    </a>
                  </div>
                  <div class="col">
                    <div class="card-body pt-0 pb-0 h-100">
                      <div class="row g-0 h-100 align-content-center">
                        <div
                          class="
                            col-12 col-md-6
                            d-flex
                            align-items-center
                            mb-2 mb-md-0
                          "
                        >
                          <a href="Products.Detail.html">Cheesymite Scroll</a>
                        </div>
                        <div
                          class="
                            col-12 col-md-3
                            d-flex
                            align-items-center
                            text-muted text-medium
                          "
                        >
                          Whole Wheat
                        </div>
                        <div
                          class="
                            col-12 col-md-3
                            d-flex
                            align-items-center
                            justify-content-md-end
                            text-muted text-medium
                          "
                        >
                          1.543 Sales
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2">
                <div class="row g-0 sh-14 sh-md-10">
                  <div class="col-auto">
                    <a href="Products.Detail.html">
                      <img
                        src="img/product/small/sandwich-bread.jpg"
                        alt="user"
                        class="card-img card-img-horizontal sw-11"
                      />
                    </a>
                  </div>
                  <div class="col">
                    <div class="card-body pt-0 pb-0 h-100">
                      <div class="row g-0 h-100 align-content-center">
                        <div
                          class="
                            col-12 col-md-6
                            d-flex
                            align-items-center
                            mb-2 mb-md-0
                          "
                        >
                          <a href="Products.Detail.html">Buccellato di Lucca</a>
                        </div>
                        <div
                          class="
                            col-12 col-md-3
                            d-flex
                            align-items-center
                            text-muted text-medium
                          "
                        >
                          Whole Wheat
                        </div>
                        <div
                          class="
                            col-12 col-md-3
                            d-flex
                            align-items-center
                            justify-content-md-end
                            text-muted text-medium
                          "
                        >
                          1.352 Sales
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <h2 class="small-title">Top Search Terms</h2>
          <div class="card sh-35 h-xl-100-card">
            <div class="card-body scroll-out h-100">
              <div class="scroll h-100">
                <div
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-between
                    mb-2
                  "
                >
                  <div class="d-flex flex-column">
                    <div>Whole wheat bread</div>
                  </div>
                  <div class="d-flex">
                    <span class="badge bg-outline-secondary">847</span>
                  </div>
                </div>
                <div
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-between
                    mb-2
                  "
                >
                  <div class="d-flex flex-column">
                    <div>White bread</div>
                  </div>
                  <div class="d-flex">
                    <span class="badge bg-outline-secondary">753</span>
                  </div>
                </div>
                <div
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-between
                    mb-2
                  "
                >
                  <div class="d-flex flex-column">
                    <div>Sourdough bread</div>
                  </div>
                  <div class="d-flex">
                    <span class="badge bg-outline-secondary">721</span>
                  </div>
                </div>
                <div
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-between
                    mb-2
                  "
                >
                  <div class="d-flex flex-column">
                    <div>Melonpan bread</div>
                  </div>
                  <div class="d-flex">
                    <span class="badge bg-outline-secondary">693</span>
                  </div>
                </div>
                <div
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-between
                    mb-2
                  "
                >
                  <div class="d-flex flex-column">
                    <div>Gluten free bread</div>
                  </div>
                  <div class="d-flex">
                    <span class="badge bg-outline-secondary">431</span>
                  </div>
                </div>
                <div
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-between
                    mb-2
                  "
                >
                  <div class="d-flex flex-column">
                    <div>sliced whole wheat bread</div>
                  </div>
                  <div class="d-flex">
                    <span class="badge bg-outline-secondary">381</span>
                  </div>
                </div>
                <div
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-between
                    mb-2
                  "
                >
                  <div class="d-flex flex-column">
                    <div>Packaged Zopf bread</div>
                  </div>
                  <div class="d-flex">
                    <span class="badge bg-outline-secondary">310</span>
                  </div>
                </div>
                <div
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-between
                    mb-2
                  "
                >
                  <div class="d-flex flex-column">
                    <div>Barm cake</div>
                  </div>
                  <div class="d-flex">
                    <span class="badge bg-outline-secondary">301</span>
                  </div>
                </div>
                <div
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-between
                    mb-2
                  "
                >
                  <div class="d-flex flex-column">
                    <div>Pita bread</div>
                  </div>
                  <div class="d-flex">
                    <span class="badge bg-outline-secondary">288</span>
                  </div>
                </div>
                <div
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-between
                    mb-2
                  "
                >
                  <div class="d-flex flex-column">
                    <div>Taftan cake</div>
                  </div>
                  <div class="d-flex">
                    <span class="badge bg-outline-secondary">219</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const { user } = toRefs(store.state);

    return { user };
  },
});
</script>
