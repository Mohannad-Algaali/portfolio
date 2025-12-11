import { useTranslation } from "react-i18next";

export default function Schedule() {
	const {t} = useTranslation()
  const hours: number[] = Array.from({ length: 24 }, (_, i) => i + 1);

  const days = [
    { day: "Mon", start: 17, end: 21 },
    { day: "Tue", start: 17, end: 21 },
    { day: "Wed", start: 17, end: 21 },
    { day: "Thu", start: 17, end: 21 },
    { day: "Fri", start: 25, end: 25 },
    { day: "Sat", start: 9, end: 21 },
    { day: "Sun", start: 9, end: 21 },
  ];

  return (
    <div className="flex flex-col justify-center items-center m-5">
      <h1 className="text-2xl mb-4">{t('workingHours')}</h1>

      <div className="shadow-xl overflow-x-auto border-2 border-base-300 text-sm rounded-lg p-2">
        <table className="table-fixed border-2 border-base-100">
          <thead>
            <tr>
              <th></th>
              <th
                colSpan={12}
                className="border-e-2 border-x-base-300 border-x-solid"
              >
                AM
              </th>
              <th
                colSpan={12}
                className="border-s-2 border-x-base-300 border-x-solid"
              >
                PM
              </th>
            </tr>
            <tr>
              <th className="w-10 h-10 border border-base-300 "></th>
              {hours.map((hour) => (
                <th
                  key={hour}
                  className={`w-10 h-10 border border-base-300 text-center `}
                >
                  {hour > 12 ? hour - 12 : hour}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {days.map((day) => (
              <tr key={day.day}>
                <td className="w-12 h-10 border border-base-300 font-semibold text-center">
                  {day.day}
                </td>

                {hours.map((hour) => (
                  <td
                    key={hour}
                    className={`w-10 h-10  ${
                      hour >= day.start && hour <= day.end
                        ? "bg-primary border-y border-base-300"
                        : `border-x border-base-300 `
                    }`}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
