import DashboardBox from "@/components/DashboardBox";

type Props = {};

const Row1 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
    </>
  );
};
export default Row1;
