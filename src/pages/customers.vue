<template>
  <container>
    <div class="container">
      <div class="page-title-container">
        <div class="row">
          <div class="col-auto mb-3 mb-md-0 me-auto">
            <div class="w-auto sw-md-30">
              <a
                href="#"
                class="muted-link pb-1 d-inline-block breadcrumb-back"
              >
                <i data-cs-icon="chevron-left" data-cs-size="13"></i>
                <span class="text-small align-middle">Home</span>
              </a>
              <h1 class="mb-0 pb-0 display-4" id="title">Customer List</h1>
            </div>
          </div>
          <div class="col-3 d-flex align-items-end justify-content-end">
            <div class="btn-group ms-1 check-all-container">
              <a
                data-bs-toggle="collapse"
                href="#addCustomer"
                class="btn btn-outline-primary ps-3 pe-2"
              >
                <em class="ni ni-user-add me-2"> </em>
                <span>New Customer</span>
              </a>
              <button
                type="button"
                class="
                  btn btn-outline-primary
                  dropdown-toggle dropdown-toggle-split
                "
                data-bs-offset="0,3"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">
                  <span class="align-middle d-inline-block">Status</span>
                </a>
                <a class="dropdown-item" href="#">
                  <span class="align-middle d-inline-block">Move</span>
                </a>
                <a class="dropdown-item" href="#">
                  <span class="align-middle d-inline-block">Delete</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-sm-8 offset-md-4 mb-1 collapse" id="addCustomer">
          <div class="row mb-4">
            <div class="col-md-12 mb-2">
              <label>Customer name</label>
              <input class="form-control" v-model="customer.name" />
            </div>
            <div class="col-md-6 mb-2">
              <label>Phone Number</label>
              <input class="form-control" v-model="customer.phone" />
            </div>
            <div class="col-md-6 mb-3">
              <label>Email Address</label>
              <input class="form-control" v-model="customer.email" />
            </div>
            <div class="col-md-12 mb-2">
              <button class="btn btn-primary float-end" @click="createCustomer">
                Save User
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-5 col-lg-3 col-xxl-2 mb-1">
          <div
            class="
              d-inline-block
              float-md-start
              me-1
              mb-1
              search-input-container
              w-100
              shadow
              bg-foreground
            "
          >
            <input class="form-control" placeholder="Search" />
            <span class="search-magnifier-icon">
              <i data-cs-icon="search"></i>
            </span>
            <span class="search-delete-icon d-none">
              <i data-cs-icon="close"></i>
            </span>
          </div>
        </div>
        <div class="col-sm-12 col-md-7 col-lg-9 col-xxl-10 text-end mb-1">
          <div class="d-inline-block">
            <button
              class="btn btn-icon btn-icon-only btn-foreground-alternate shadow"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-delay="0"
              title="Print"
              type="button"
            >
              <i data-cs-icon="print"></i>
            </button>
            <div class="d-inline-block">
              <button
                class="btn p-0"
                data-bs-toggle="dropdown"
                type="button"
                data-bs-offset="0,3"
              >
                <span
                  class="
                    btn btn-icon btn-icon-only btn-foreground-alternate
                    shadow
                    dropdown
                  "
                  data-bs-delay="0"
                  data-bs-placement="top"
                  data-bs-toggle="tooltip"
                  title="Export"
                >
                  <i data-cs-icon="download"></i>
                </span>
              </button>
              <div class="dropdown-menu shadow dropdown-menu-end">
                <button class="dropdown-item export-copy" type="button">
                  Copy
                </button>
                <button class="dropdown-item export-excel" type="button">
                  Excel
                </button>
                <button class="dropdown-item export-cvs" type="button">
                  Cvs
                </button>
              </div>
            </div>
            <div
              class="dropdown-as-select d-inline-block"
              data-childselector="span"
            >
              <button
                class="btn p-0 shadow"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-offset="0,3"
              >
                <span
                  class="btn btn-foreground-alternate dropdown-toggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-delay="0"
                  title="Item Count"
                >
                  10 Items
                </span>
              </button>
              <div class="dropdown-menu shadow dropdown-menu-end">
                <a class="dropdown-item" href="#">5 Items</a>
                <a class="dropdown-item active" href="#">10 Items</a>
                <a class="dropdown-item" href="#">20 Items</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-5">
          <div class="card mb-2 bg-transparent no-shadow d-none d-lg-block">
            <div class="row g-0 sh-3">
              <div class="col">
                <div class="card-body pt-0 pb-0 h-100">
                  <div class="row g-0 h-100 align-content-center">
                    <div
                      class="
                        col-6 col-lg-2
                        d-flex
                        align-items-center
                        text-alternate text-medium text-muted text-small
                      "
                    >
                      Name
                    </div>
                    <div
                      class="
                        col-6 col-lg-2
                        d-flex
                        align-items-center
                        text-alternate text-medium text-muted text-small
                      "
                    >
                      Email
                    </div>
                    <div
                      class="
                        col-6 col-lg-2
                        d-flex
                        align-items-center
                        text-alternate text-medium text-muted text-small
                      "
                    >
                      Phone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="checkboxTable">
            <div class="card mb-2" v-for="c in customers.data" :key="c.id">
              <div class="card-body pt-0 pb-0 sh-30 sh-lg-8">
                <div class="row g-0 h-100 align-content-center">
                  <div
                    class="
                      col-6 col-lg-2
                      d-flex
                      flex-column
                      justify-content-center
                      mb-2 mb-lg-0
                      order-3 order-lg-2
                    "
                  >
                    <div class="text-muted text-small d-lg-none">Name</div>
                    <div class="text-alternate">
                        {{ c.name }}
                    </div>
                  </div>
                  <div
                    class="
                      col-6 col-lg-2
                      d-flex
                      flex-column
                      justify-content-center
                      mb-2 mb-lg-0
                      order-5 order-lg-3
                    "
                  >
                    <div class="text-muted text-small d-lg-none">Location</div>
                    <div class="text-alternate">
                        {{ c.email }}
                    </div>
                  </div>
                  <div
                    class="
                      col-6 col-lg-2
                      d-flex
                      flex-column
                      justify-content-center
                      mb-2 mb-lg-0
                      order-4 order-lg-4
                    "
                  >
                    <div class="text-muted text-small d-lg-none">Spent</div>
                    <div class="text-alternate">
                      <span>
                        <span class="text-small">$</span>
                        {{ c.phone }}
                      </span>
                    </div>
                  </div>
                  <div
                    class="
                      col-1 col-lg-1
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-lg-end
                      mb-2 mb-lg-0
                      order-2
                      text-end
                      order-lg-last
                    "
                  >
                    <em class="icon ni ni-pen">
                    </em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <nav>
          <ul class="pagination">
            <li class="page-item disabled">
              <a
                class="page-link shadow"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                <i data-cs-icon="chevron-left"></i>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link shadow" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link shadow" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link shadow" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                <i data-cs-icon="chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </container>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";
import customerApi from "../http/customer";

export default defineComponent({
  setup() {
    const store = useStore();
    const { user } = toRefs(store.state);
    const customers = ref({
      data: [],
    });
    const customer = reactive({
      name: "",
      email: "",
      phone: "",
    });

    function fetchCustomers(page) {
      customerApi()
        .fetch({ page, per_page: 10 })
        .then((res) => {
          customers.value = res;
        });
    }

    function createCustomer() {
      customerApi()
        .create(customer)
        .then(() => {
          customer.name = "";
          customer.email = "";
          customer.phone = "";
        });
    }

    onBeforeMount(() => {
      fetchCustomers();
    });

    return { user, customer, customers, createCustomer };
  },
});
</script>