import fs from "fs/promises";
import path from "path";

type Certificate = {
  credentialId: string;
  year: number;
  name: string;
  role: string;
  issuedOn: string;
  certificateImage: string;
};

type VerifyPageProps = {
  params: Promise<{
    year: string;
    id: string;
  }>;
};

export default async function VerifyPage({ params }: VerifyPageProps) {
  const { year, id } = await params;

  const credentialId = `${year}/${id}`;

  let certificates: Certificate[];

  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      `certificates_${year}.json`,
    );

    const file = await fs.readFile(filePath, "utf-8");
    certificates = JSON.parse(file);
  } catch(err) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="glass-panel rounded-2xl p-10 max-w-lg w-full text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-400">
            Credential Not Found
          </h1>

          <p className="text-gray-400">
            No credential was found for ID{" "}
            <span className="text-cyan-400 font-mono">{credentialId}</span>
          </p>
        </div>
      </div>
    );
  }

  const certificate = certificates.find(
    (certificate) => certificate.credentialId === credentialId,
  );

  if (!certificate) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="glass-panel rounded-2xl p-10 max-w-lg w-full text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-400">
            Credential Not Found
          </h1>

          <p className="text-gray-400">
            No credential was found for ID{" "}
            <span className="text-cyan-400 font-mono">{credentialId}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 px-6 py-2 rounded-full glass-panel border border-cyan-500/30">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider">
              CREDENTIAL VERIFICATION
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Certificate <span className="text-gradient">Verified</span>
          </h1>

          <p className="text-gray-400">
            This credential has been issued by FAAST.
          </p>
        </div>

        {/* Certificate Image */}
        <div className="glass-panel rounded-2xl p-4 md:p-6 mb-8">
          <img
            src={certificate.certificateImage}
            alt={`Certificate of ${certificate.name}`}
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Credential Details Box */}
        <div className="glass-panel rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            Credential Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Credential ID</p>
              <p className="font-mono text-cyan-400">
                {certificate.credentialId}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Name</p>
              <p className="text-white font-medium">{certificate.name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Role</p>
              <p className="text-white">{certificate.role}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Issued On</p>
              <p className="text-white">{certificate.issuedOn}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-green-400 font-semibold">
            &#10003; This credential is valid
          </p>
        </div>
      </div>
    </div>
  );
}
