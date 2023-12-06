import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
/* TODO: add midellware for Sure, in Next.js, you can use API routes to create server-side functions. Here’s how you can add middleware and apply security best practices to your Next.js API routes:

!Input Validation: Always validate the user input on the server-side. This can help prevent attacks such as SQL injection, script injection, etc. You can use libraries like joi or yup for schema validation.

!Rate Limiting: Protect your API from brute force and denial of service attacks by limiting the number of requests a client can make in a given amount of time. You can use libraries like express-rate-limit or micro-ratelimiter.

!Use Tokens for Authentication: If you’re not already doing so, consider using a token-based authentication method like JWT (JSON Web Tokens). Tokens are more secure and scalable.

!Error Handling: Always handle errors and exceptions properly. Don’t reveal any sensitive information in the error responses.

!CORS: If your API is being accessed from different origins, make sure to configure Cross-Origin Resource Sharing (CORS) properly. You can use the cors middleware for this. */

// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug")
  if (!postSlug || typeof postSlug !== 'string') {
    return new NextResponse(
      JSON.stringify({ message: "Invalid input!" }, { status: 400 })
    )
  }
  try {


    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    // console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// CREATE A COMMENT
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
/* // DELETE A COMMENT
export const DELETE = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.findUnique({
      where: { id: body.id },
    });

    if (comment.userEmail !== session.user.email) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authorized!" }, { status: 403 })
      );
    }

    await prisma.comment.delete({
      where: { id: body.id },
    });

    return new NextResponse(JSON.stringify({ message: "Comment deleted!" }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// UPDATE A COMMENT
export const PUT = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.findUnique({
      where: { id: body.id },
    });

    if (comment.userEmail !== session.user.email) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authorized!" }, { status: 403 })
      );
    }

    const updatedComment = await prisma.comment.update({
      where: { id: body.id },
      data: body,
    });

    return new NextResponse(JSON.stringify(updatedComment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
 */