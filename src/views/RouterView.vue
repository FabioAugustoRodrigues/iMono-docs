<template>
    <main>
        <section class="mb-4">
            <h1>Router</h1>
            <p>
                The iMono framework's routing system is a robust structure that links URLs to PHP controllers and
                methods.
                It supports various HTTP methods (<code>GET</code>, <code>POST</code>, <code>PUT</code>,
                <code>DELETE</code>, <code>PATCH</code>, <code>OPTIONS</code>)
                and allows the addition of middleware
                for preprocessing requests.
                The system also supports route patterns, facilitating dynamic parameters within URLs.
            </p>
        </section>

        <section>
            <h3>Creating a Route</h3>
            <p>
                You can define a route by calling one of the static methods on the <code>Router</code> class and
                specifying
                the HTTP method, URL pattern, controller class, and method. This can be done in your routing
                configuration file,
                typically located at <code>routes/web.php</code> or <code>routes/api.php</code>.
            </p>
        </section>

        <section>
            <h3>Example</h3>

            <CodeHighlighter :code="exampleRoute" />
        </section>

        <section>
            <h3>Methods for Defining Routes</h3>

            <ul>
                <li>
                    <CodeHighlighter :code="'Router::get($route, $class, $method)'" />
                </li>
                <li>
                    <CodeHighlighter :code="'Router::post($route, $class, $method)'" />
                </li>
                <li>
                    <CodeHighlighter :code="'Router::put($route, $class, $method)'" />
                </li>
                <li>
                    <CodeHighlighter :code="'Router::delete($route, $class, $method)'" />
                </li>
                <li>
                    <CodeHighlighter :code="'Router::patch($route, $class, $method)'" />
                </li>
                <li>
                    <CodeHighlighter :code="'Router::options($route, $class, $method)'" />
                </li>
            </ul>

            <p>Each method registers a route for the specified HTTP method.</p>
        </section>

        <section>
            <h3>Example Usage</h3>
            <CodeHighlighter :code="exampleUsage" />
        </section>

        <section>
            <h3>Route Patterns</h3>
            <p>
                The router supports dynamic route patterns using curly braces <code>{}</code> to capture URL parameters.
            </p>
        </section>

        <section>
            <h3>Example</h3>
            <CodeHighlighter :code="examplePatterns" />
            <p>
                In this example, the <code>{id}</code> parameter will be passed to the <code>profile</code> method of
                <code>UserController</code>.
            </p>
        </section>

        <section>
            <h3>Adding middleware</h3>
            <p>
                Middleware can be added to routes to preprocess requests. Middleware can be specified for individual
                routes or grouped routes.
            </p>
        </section>

        <section>
            <h3>Adding Middleware to a Single Route</h3>
            <CodeHighlighter :code="addMiddlewareExample"></CodeHighlighter>
        </section>

        <section>
            <h3>Grouping Routes with Middleware</h3>
            <p>
                You can group routes and apply middleware to the entire group the <code>group</code> method.
            </p>
        </section>

        <section>
            <h3>Example</h3>
            <CodeHighlighter :code="middlewareGroupExample"></CodeHighlighter>
        </section>

        <section>
            <h3>Middleware Class</h3>
            <p>
                Middleware classes in the iMono framework are used to define code that can be executed before and after
                the main request handler. All middleware classes should be created in the
                <code>app\http\middleware</code> namespace
                and extend the <code>Middleware</code> base class.
            </p>
        </section>

        <section>
            <h3>Example Middleware</h3>
            <CodeHighlighter :code="exampleMiddleware"></CodeHighlighter>
        </section>

        <section>
            <h3>Conclusion</h3>
            <p>
                The iMono framework's router system provides a flexible and powerful way to handle routing in your
                application. By defining routes, adding middleware, and dispatching requests, you can efficiently manage
                how your application responds to different HTTP requests. This documentation covers the essential
                methods and patterns you need to get started with routing in iMono.
            </p>
        </section>
    </main>
</template>


<script setup>
import CodeHighlighter from '../components/CodeHighlighter.vue';

const exampleRoute = `Router::post("/api/getCurrentDateTime", ExampleController::class, "getCurrentDateTime");`;

const exampleUsage = `Router::get("/home", HomeController::class, "index");
Router::post("/user/create", UserController::class, "create");
Router::put("/user/update/{id}", UserController::class, "update");
Router::delete("/user/delete/{id}", UserController::class, "delete");`;

const examplePatterns = `Router::get("/user/{id}/profile", UserController::class, "profile");`;

const addMiddlewareExample = `Router::addMiddleware("/admin/*", AuthMiddleware::class);`;

const middlewareGroupExample = `Router::group(['middleware' => AuthMiddleware::class], function () {
    Router::get("/dashboard", DashboardController::class, "index");
    Router::get("/settings", SettingsController::class, "index");
});`;

const exampleMiddleware = `<?php

namespace app\http\middleware;

use app\core\controller\Request;

class AuthMiddleware extends Middleware
{
    public function before(Request $request)
    {
        // Authentication logic here
    }

    public function after(Request $request, $response)
    {
        // Post-processing logic here
    }
}
`;
</script>