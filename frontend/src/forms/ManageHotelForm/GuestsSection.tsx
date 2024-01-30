import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Gests</h2>
      <div className="text-sm font-semibold bg-gray-300 flex p-4 gap-4">
        <label className="w-full">
          Adults
          <input
            className="border rounded w-full py-2 px-3 font-bold flex-1"
            type="number"
            min={1}
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
          {errors.adultCount && (
            <span className="text-red-500 text-sm font-bold">
              {errors.adultCount.message}
            </span>
          )}
        </label>
        <label className="w-full">
          Children
          <input
            className="border rounded w-full py-2 px-3 font-bold flex-1"
            type="number"
            min={0}
            {...register("childCount", {
              required: "This field is required",
            })}
          />
          {errors.childCount && (
            <span className="text-red-500 text-sm font-bold">
              {errors.childCount.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
