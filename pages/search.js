import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const { zip } = router.query;

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Top Loan Agents {zip ? `in ${zip}` : "Near You"}
      </h1>
      <p className="text-center text-gray-600">
        This is where we'll list loan officers that match the search. ZIP code passed: <strong>{zip}</strong>
      </p>

      {/* Later: map over dynamic results from Supabase */}
      <div className="mt-10 space-y-4">
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Jane Smith</h2>
          <p className="text-gray-500">NMLS #123456 – Specializes in FHA, First-Time Buyers</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Mike Johnson</h2>
          <p className="text-gray-500">NMLS #789012 – Expert in VA & Jumbo Loans</p>
        </div>
      </div>
    </div>
  );
}
