<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <div class="m-3">
          <div class="absolute-top-right d-lg-none p-3 p-sm-5 d-none">
            <a
              href="#"
              class="toggle btn btn-white btn-icon btn-light"
              data-bs-target="athPromo"
            >
              <em class="icon ni ni-info"></em>
            </a>
          </div>
          <div class="nk-block nk-block-middle nk-auth-body">
            <div class="brand-logo pb-5">
              <a href="https://osen.co.ke" target="_blank" class="logo-link">
                <img
                  class="logo"
                  :src="
                    branding && branding.value
                      ? `${apiURL}/uploads/${branding.value?.logo}`
                      : '/img/logo/logo-light.svg'
                  "
                />
              </a>
            </div>
            <div class="nk-block-head">
              <div class="nk-block-head-content">
                <h5 class="nk-block-title" v-if="action == 'register'">
                  Create account
                </h5>
                <h5 class="nk-block-title" v-else-if="action == 'forgot'">
                  Forgot password
                </h5>
                <h5 class="nk-block-title" v-else>Login now</h5>
                <div class="nk-block-des">
                  <div
                    v-if="alert.message"
                    class="w-100 mx-auto mt-4 alert"
                    :class="`alert-${alert.type}`"
                  >
                    {{ alert.message }}
                  </div>
                </div>
              </div>
            </div>
            <template v-if="action == 'register'">
              <form class="row" @submit.prevent="registerUser" autocomplete>
                <div class="mb-3 col-md-6">
                  <label class="form-label" for="first_name">First Name</label>
                  <div class="form-control-wrap">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="first_name"
                      placeholder="Enter first name"
                      autocomplete="name"
                      v-model="profile.first_name"
                    />
                  </div>
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label" for="last_name">Last Name</label>
                  <div class="form-control-wrap">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="last_name"
                      placeholder="Enter last name"
                      autocomplete="name"
                      v-model="profile.last_name"
                    />
                  </div>
                </div>
                <div class="mb-3 col-md-12">
                  <label class="form-label" for="email"> Email Address </label>
                  <div class="form-control-wrap">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="email"
                      placeholder="Enter email address"
                      autocomplete="username"
                      v-model="profile.email"
                    />
                  </div>
                </div>
                <div class="mb-3 col-md-12">
                  <label class="form-label" for="phone"> Phone Number </label>
                  <div class="form-control-wrap">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="phone"
                      placeholder="Enter phone"
                      autocomplete="phone"
                      v-model="profile.phone"
                    />
                  </div>
                </div>
                <div class="mb-3 col-md-12">
                  <label class="form-label" for="reg-password">
                    Account Password
                  </label>
                  <div class="input-group">
                    <input
                      :type="showPass ? 'text' : 'password'"
                      class="form-control form-control-lg"
                      id="reg-password"
                      placeholder="Enter password"
                      autocomplete="current-password"
                      v-model="profile.password"
                    />
                    <em
                      @click.prevent="togglePassword()"
                      class="input-group-text icon ni ni-eye-off"
                      v-if="showPass"
                    >
                    </em>
                    <em
                      @click.prevent="togglePassword()"
                      class="input-group-text icon ni ni-eye"
                      v-else
                    ></em>
                  </div>
                </div>
                <div class="mb-3 col-md-12">
                  <button class="btn btn-lg btn-primary btn-block">
                    Sign Up
                  </button>
                </div>
              </form>
              <div class="form-note-s2 pt-4">
                Already have an account?
                <a href="#" @click.prevent="setAction('login')">
                  <strong>Sign in.</strong>
                </a>
              </div>
            </template>
            <template v-else-if="action == 'forgot'">
              <form @submit.prevent="requestReset">
                <div class="mb-3">
                  <label class="form-label" for="username">
                    Email or phone number
                  </label>
                  <div class="form-control-wrap">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="username"
                      placeholder="Enter phone, email address or username"
                      autocomplete="username"
                      v-model="profile.username"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <button class="btn btn-lg btn-primary btn-block">
                    Request Reset Link
                  </button>
                </div>
              </form>
              <div class="form-note-s2 pt-4">
                Back to
                <a href="#" @click.prevent="setAction('login')">
                  <strong>login.</strong>
                </a>
              </div>
            </template>
            <template v-else>
              <form @submit.prevent="loginUser">
                <div class="mb-3">
                  <label class="form-label" for="username">
                    Email or phone number
                  </label>
                  <div class="form-control-wrap">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="username"
                      placeholder="Enter phone, email address or username"
                      autocomplete="username"
                      v-model="profile.username"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="password">
                    Account password
                  </label>
                  <div class="input-group">
                    <input
                      :type="showPass ? 'text' : 'password'"
                      class="form-control form-control-lg"
                      id="password"
                      placeholder="Enter password"
                      autocomplete="current-password"
                      v-model="profile.password"
                    />

                    <em
                      @click.prevent="togglePassword()"
                      class="input-group-text icon ni ni-eye-off"
                      v-if="showPass"
                    >
                    </em>
                    <em
                      @click.prevent="togglePassword()"
                      class="input-group-text icon-show icon ni ni-eye"
                      v-else
                    ></em>
                  </div>
                </div>
                <div class="mb-3">
                  <button class="btn btn-lg btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </form>
              <div class="form-note-s2 pt-4 d-flex justify-content-between">
                <a href="#" @click.prevent="setAction('register')">
                  No account? <strong>Sign up.</strong>
                </a>
                <a class="ml-3" href="#" @click.prevent="setAction('forgot')">
                  <strong>Forgot Password?</strong>
                </a>
              </div>
            </template>
            <template v-if="action !== 'forgot'">
              <div class="text-center pt-4 pb-3">
                <h6 class="overline-title overline-title-sap">
                  <span>OR</span>
                </h6>
              </div>
              <ul class="nav justify-between gx-8 mx-5">
                <li class="nav-item">
                  <a
                    class="nav-link btn btn-lg btn-round btn-icon btn-light"
                    href="#"
                    @click.prevent="socialAuth('google')"
                  >
                    <em class="icon ni ni-google text-google"></em>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link btn btn-lg btn-round btn-icon btn-light"
                    href="#"
                    @click.prevent="socialAuth('facebook')"
                  >
                    <em class="icon ni ni-facebook-f text-facebook"></em>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link btn btn-lg btn-round btn-icon btn-light"
                    href="#"
                    @click.prevent="socialAuth('apple')"
                  >
                    <em class="icon ni ni-apple text-apple"></em>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link btn btn-lg btn-round btn-icon btn-light"
                    href="#"
                    @click.prevent="socialAuth('twitter')"
                  >
                    <em class="icon ni ni-twitter text-twitter"></em>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link btn btn-lg btn-round btn-icon btn-light"
                    href="#"
                    @click.prevent="socialAuth('github')"
                  >
                    <em class="icon ni ni-github-circle text-github"></em>
                  </a>
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  onBeforeMount,
  onMounted,
  toRefs,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import users from "../http/user";
import storage from `../store/storage`;
import { useStore } from "vuex";
export default defineComponent({
  name: "Authentication",
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const org = ref({});
    const branding = computed(() =>
      org.value?.settings?.find((s: any) => s.option == "branding")
    );
    const action = ref("login");
    const showPass = ref(false);
    const profile = reactive({
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone: 254,
      password: "",
      data: {},
      role: "owner",
    });
    const alert = reactive({
      type: "info",
      message: "",
    });
    let apiURL = import.meta.env.VITE_API_URL;
    if (typeof apiURL == "undefined" || typeof apiURL == "boolean") {
      apiURL = "https://osenapi.herokuapp.com/v1";
    }
    function setAction(val = "login") {
      action.value = val;
    }
    function goHome() {
      store.dispatch("authenticate").then(() => {
        storage()
          .getItem("token")
          .then((token) => {
            if (token) {
              router.push(route.query?.redirect || "/");
            }
          });
      });
    }
    function loginUser() {
      users()
        .login(profile)
        .then(({ user, error }) => {
          if (user) {
            goHome();
          } else if (error) {
            console.log(error);
            alert.type = "danger";
            alert.message = error.message;
          }
        });
    }
    function socialAuth(provider: string) {
      users()
        .oauth(provider)
        .then(({ user, error }) => {
          if (user) {
            goHome();
          } else if (error) {
            alert.type = "danger";
            alert.message = error.message;
          }
        });
    }
    function registerUser() {
      users()
        .register(profile)
        .then(({ token }) => {
          if (token) {
            goHome();
          } else {
            action.value = "login";
          }
        });
    }
    function requestReset() {
      users()
        .login(profile)
        .then(({ user }) => {
          if (user) {
            action.value = "reset";
          }
        });
    }
    function resetPassword() {
      users()
        .login(profile)
        .then(({ user }) => {
          if (user) {
            action.value = "login";
          }
        });
    }
    function togglePassword() {
      showPass.value = !showPass.value;
    }
    onBeforeMount(() => {
      storage()
        .getObject("org")
        .then((o: any) => {
          org.value = o;
        });
    });
    onMounted(() => {
      if (route.query?.message) {
        alert.type = "danger";
        alert.message = route.query.message;
      }
    });
    return {
      action,
      setAction,
      loginUser,
      registerUser,
      requestReset,
      resetPassword,
      togglePassword,
      showPass,
      alert,
      profile,
      socialAuth,
      org,
      branding,
      apiURL,
    };
  },
});
</script>