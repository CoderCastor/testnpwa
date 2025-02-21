import MembershipCard from "./MembershipCard";

const Membership = () => {
  return (
    <section id="Membership" className="h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <MembershipCard
          title="Premium Membership" 
          description="Get exclusive benefits with our premium plan!" 
          borderColor="border-blue-500"
        />
        <MembershipCard
          title="Gold Membership" 
          description="Enjoy more features with our gold plan!" 
          borderColor="border-yellow-500"
        />
        <MembershipCard
          title="Platinum Membership" 
          description="Experience the best with our platinum plan!" 
          borderColor="border-purple-500"
        />
      </div>
    </section>
  );
};

export default Membership;
