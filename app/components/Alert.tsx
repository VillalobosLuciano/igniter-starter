import Container from "./Container";
import clsx from "clsx";
import Link from "next/link";

export default function Alert({ preview }: { preview: boolean }) {
  return (
    <div
      className={clsx({
        "border-b border-[#F37000]/50 bg-[#F37000]/5 text-black dark:text-zinc-300":
          preview,
      })}
    >
      <Container>
        {preview ? (
          <div className="py-2 text-center text-sm">
            <>
              This page is a preview.{" "}
              <Link href="/api/exit-preview">
                <a className="underline transition-colors hover:text-[#F37000]">
                  Click here
                </a>
              </Link>{" "}
              to exit preview mode.
            </>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
