import { useForm } from "@felte/react";
import { useEffect, useState } from "react";

export function FelteForm() {
  const [fakeDataLoaded, setFakeDataLoaded] = useState(false);
  const { form } = useForm({
    onSubmit: (values) => {
      alert("felte submit triggered");
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setFakeDataLoaded(true);
    }, 1000);
  }, []);

  if (!fakeDataLoaded) {
    return <div>loading...</div>;
  }

  return (
    <form ref={form} method="POST" action="/api/fake-endpoint">
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button type="submit">Sign In</button>
    </form>
  );
}
