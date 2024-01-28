import { FormProvider, useForm } from "react-hook-form";
import HotelDetailsSection from "./HotelDetailsSection";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  starRating: number;
  imageUrls: FileList;
  lastUpdated: Date;
};
const ManageHotelForm = () => {
  const formMethods = useForm<HotelFormData>();
  return (
    <FormProvider {...formMethods}>
      <form>
        <HotelDetailsSection />
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
