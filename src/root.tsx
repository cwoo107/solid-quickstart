// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
	      <div style="background-color: #4b534f">
 
    <div class="container" style="margin-top:20px; background-color: white; border-radius: 20px;">
      <div class="py-3">
        <div class="text-center">
        <img class="d-block mx-auto mb-4" src="https://usanorth811.org/images/underground-service-alert.png" alt="underground service alert" width="250">
<div>
        <div class="preference-container text-left">
        	%%Content%%
        </div>
      </div>
 
      
    </div>
     </div>
    </div>

  </div>
        <Suspense>
          <ErrorBoundary>
            <A href="/">Index</A>
            <A href="/about">About</A>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
