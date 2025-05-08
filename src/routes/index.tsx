import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "@qwikest/icons/heroicons";
import HeroImg from "~/assets/img/heroImgQDash.png?jsx";
import HeroImgSM from "~/assets/img/heroMobileImgQDash.png?jsx";

export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col p-6">
      <div class="flex h-20 shrink-0 items-end rounded-lg bg-linear-to-br from-[#00E5FF] to-[#1200FF] p-4 md:h-52">
        <h1 class="text-4xl text-white">
          Qdash
        </h1>
      </div>
      <div class="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div class="h-0 w-0 border-r-[20px] border-b-[30px] border-l-[20px] border-r-transparent border-b-blue-500 border-l-transparent" />
          <p class="lusitana text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to QDash.</strong> A Web that helps you managed your invoices{" "}
          </p>
          <Link
            href="/dashboard"
            class="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
            {<HiArrowRightOutline />}
          </Link>
        </div>
        <div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <HeroImg class="hidden md:block" />
          <HeroImgSM class="block md:hidden lg:hidden" />
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to QDash",
  meta: [
    {
      name: "description",
      content: "Web to manage your invoices",
    },
  ],
};
