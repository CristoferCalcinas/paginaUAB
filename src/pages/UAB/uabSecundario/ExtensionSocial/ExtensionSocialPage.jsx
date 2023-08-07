import { ExtensionSocialPageCard } from "./ExtensionSocialPageCard";
import { EXTENSION_SOCIAL } from "./const/extensionsocial";

export const ExtensionSocialPage = () => {
  const extensionSocial = EXTENSION_SOCIAL;

  return (
    <div className="overflow-hidden h-full">
      <section className="text-gray-600 body-font">
        <section className="text-gray-600 body-font">
          <ExtensionSocialPageCard extensionSocial={extensionSocial} />
        </section>
      </section>
    </div>
  );
};
