import {
  $,
  component$,
  useComputed$,
  useOnDocument,
  useSignal,
} from "@builder.io/qwik";
import { HiMoonSolid } from "@qwikest/icons/heroicons";
import { DatePicker } from "qwik-date";
import { CalendarInline } from "qwik-date/inline";
function useDoEvent() {
  const message = useSignal("light");
  useOnDocument(
    "darkmode",
    $(() => {
      const theme = document.documentElement.className;
      message.value = theme;
    }),
  );
  return message;
}

export default component$(() => {
  const customMessage = useDoEvent();
  const day = useSignal(23);
  const month = useSignal(12);
  const year = useSignal(2024);
  const date = useComputed$<`${number}-${number}-${number}`>(
    () => `${year.value}-${month.value}-${day.value}`,
  );

  return (
    <div class="flex h-screen w-full items-center justify-center dark:bg-slate-900">
      <DatePicker
        date={date.value}
        onDateChange$={(newDate) => {
          const split = newDate.split("-");
          const Syear = split[0];
          const Smonth = split[1];
          const Sday = split[2];
          year.value = Number(Syear);
          month.value = Number(Smonth);
          day.value = Number(Sday);
          console.log(newDate, Sday, Smonth, Syear);
        }}
        triggerLabel={date.value}
        locale="es"
        triggerProps={{ class: "color:blue" }}
      />

      <CalendarInline
        date={date.value}
        onDateChange$={(newDate) => {
          const split = newDate.split("-");
          const Syear = split[0];
          const Smonth = split[1];
          const Sday = split[2];
          year.value = Number(Syear);
          month.value = Number(Smonth);
          day.value = Number(Sday);
          console.log(newDate, Sday, Smonth, Syear);
        }}
        locale="es"
      />
      <button
        onClick$={() => {
          const newEvent: Event = new Event("darkmode");
          if (customMessage.value === "light") {
            document.documentElement.className = "dark";
            document.dispatchEvent(newEvent);
          } else {
            document.documentElement.className = "light";
            document.dispatchEvent(newEvent);
          }
        }}
      >
        <HiMoonSolid />
      </button>
      <h2>{customMessage}</h2>
    </div>
  );
});
