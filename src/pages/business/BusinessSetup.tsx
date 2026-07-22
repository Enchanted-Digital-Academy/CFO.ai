import { useState } from "react";

const BusinessSetup = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl bg-zinc-900 p-8 shadow-lg text-white">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          Business Setup Wizard
        </h1>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Business Information
            </h2>

            <input
              type="text"
              placeholder="Business Name"
              className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
            />

            <input
              type="text"
              placeholder="Business Industry"
              className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
            />

            <input
              type="text"
              placeholder="Business Type"
              className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
            />
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Financial Information
            </h2>

            <input
              type="text"
              placeholder="Currency"
              className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
            />

            <input
              type="text"
              placeholder="Monthly Revenue Range"
              className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
            />

            <input
              type="number"
              placeholder="Number of Employees"
              className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
            />
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Preferences
            </h2>

            <input
              type="text"
              placeholder="Receive AI Insights? (Yes / No)"
              className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
            />

            <input
              type="text"
              placeholder="Theme Preference (Light / Dark)"
              className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
            />
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-yellow-400">
              You're All Set!
            </h2>

            <p>Your CFO.ai workspace is ready.</p>

            <button
              className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black hover:bg-yellow-500"
            >
              Go to Dashboard
            </button>
          </div>
        )}

        {/* NAVIGATION BUTTONS */}
        {step !== 4 && (
          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="rounded-lg bg-zinc-700 px-6 py-2"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={() => {
                if (step < 4) {
                  setStep(step + 1);
                }
              }}
              className="rounded-lg bg-yellow-400 px-6 py-2 font-semibold text-black hover:bg-yellow-500"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessSetup;