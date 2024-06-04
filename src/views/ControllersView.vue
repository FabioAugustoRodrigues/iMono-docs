<template>
  <main>
    <section class="mb-4">
      <h1>Controllers</h1>
      <p>
        The iMono framework includes a well-structured controller system that simplifies the process of
        handling HTTP requests and generating responses. Controllers in iMono are designed to extend from
        an abstract base class, providing a consistent and reusable set of methods for handling common
        tasks such as creating responses, sending JSON data, and rendering views.
      </p>
      <p>
        The controller files are located in <code>app/http/controller</code> folder.
      </p>
    </section>

    <section>
      <h3>Controller Abstract Class</h3>
      <p>
        The <code>ControllerAbstract</code> class, located in the <code>app\core\controller</code> namespace,
        provides several protected methods that are intended to be used by concrete controller classes.
      </p>
    </section>

    <section>
      <h3>Example controller</h3>
      <p>
        The <code>ExampleController</code> class, located in the <code>app/http/controller</code> namespace, extends the
        <code>ControllerAbstract</code> class and demostrates how to implement custom controller actions.
      </p>
    </section>

    <section>
      <h3>Methods</h3>

      <div>
        <code>getCurrentDateTime</code>
        <CodeHighlighter :code="getCurrentDateTime" />
        <p>
          This method returns the current date and time in JSON format. It uses the <code>respondJson</code> method to
          send the
          response with a status code of 200.
        </p>
      </div>

      <div>
        <code>index</code>
        <CodeHighlighter :code="index" />
        <p>
          This method renders the <code>index</code> view. It uses the <code>view</code> method to achieve this.
        </p>
      </div>

      <div>
        <p>
          Note that these methods were developed only to explain the use of the controller.
        </p>
      </div>
    </section>

    <section>
      <h3>Usage</h3>
      <p>
        To create a new controller in the iMono framework, follow these steps:
      </p>

      <ol>
        <li>Create a new Controller Class: Create a new PHP file in the <code>app\http\controller</code> directory.</li>
        <li>Extend <code>ControllerAbstract</code> class: Ensure your new controller class extends the
          <code>ControllerAbstract</code> class.
        </li>
        <li>Define Controller Methods: Deine the methods that will handle diffent actions.</li>
        <li>Use Protected Methods: Utilize the protected methods provided by the <code>ControllerAbstract</code> class
          to manage responses and views.</li>
      </ol>
    </section>

    <section>
      <h3>Example</h3>
      <CodeHighlighter :code="exampleUsageController" />
      <p>
        In this example, <code>MyController</code> defines two methods: <code>show</code> and <code>home</code>. The
        <code>show</code>
        method returns a JSON response, and the <code>home</code> method renders a view called <code>home</code>.
      </p>
    </section>

    <section>
      <h3>Conclusion</h3>

      <p>
        The iMono framework's controller system provides a simple and flexible way to handle HTTP request
        and generate responses. By extending the <code>ControllerAbstract</code> class, developers can quickly create
        controllers
        that
        leverage built-in methods to create and send responses, manage JSON data, and render views.
      </p>
    </section>
  </main>
</template>


<script setup>
import CodeHighlighter from '../components/CodeHighlighter.vue';

const getCurrentDateTime = `public function getCurrentDateTime()`;

const index = `public function index()`;

const exampleUsageController = `<?php
namespace app\\http\\controller;

use app\\core\\controller\\ControllerAbstract;

class MyController extends ControllerAbstract
{
    public function show()
    {
        return $this->respondJson(
            [
                "data" => [
                    "message" => "Hello, World!"
                ],
                "status" => 200
            ],
            200
        );
    }

    public function home()
    {
        $this->view('home');
    }
}
`;
</script>
