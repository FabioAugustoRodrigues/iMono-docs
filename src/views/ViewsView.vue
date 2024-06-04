<template>
    <main>
        <section class="content">
            <h1>Views</h1>
            <p>
                The iMono framework includes a view rendering system that simplifies the
                process of displaying HTML or PHP content.
                Views in iMono are stored in the <code>app/views</code> directory
                and can be rendered by the controller using the <code>View</code> class.
            </p>

            <div class="row mt-4">
                <div class="col-12">
                    <h6>On this page</h6>
                    <ul class="">
                        <li><a href="#view-class" class="text-decoration-none">View class</a></li>
                        <li><a href="#directory-structure" class="text-decoration-none">Directory structure</a></li>
                        <li><a href="#example-usage" class="text-decoration-none">Example usage in controllers</a></li>
                        <li><a href="#conclusion" class="text-decoration-none">Conclusion</a></li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="content" id="view-class">
            <div class="sub-content">
                <h3>View Class</h3>
                <p>
                    The <code>View</code> class, located in the <code>app\util</code> namespace,
                    provides a static method to render view files. This class is utilized by the
                    <code>ControllerAbstract</code> class
                    to render views in a straightforward manner.
                </p>
            </div>

            <div class="sub-content">
                <h5>Methods</h5>

                <div>
                    <code>render</code>
                    <CodeHighlighter :code="renderMethod" />
                    <p>
                        This method renders a view file. It takes one parameter:
                        <code>$filename</code>: The name of the view file to be rendered (without the extension).
                    </p>
                    <p>
                        The <code>render</code> method looks for a .php or .html file in the
                        <code>app/views</code> directory corresponding to the given filename.
                        If the file exists, it includes the file to render its content. If the
                        file does not exist, it displays an error message.
                    </p>
                </div>
            </div>
        </section>

        <section class="content" id="directory-structure">
            <h3>Directory Structure</h3>
            <p>
                Views are stored in the <code>app/views</code> directory. The render method supports
                both PHP and HTML files. When a view is requested, the method checks for files in the following order:
            </p>

            <ol>
                <li><code>app/views/filename.php</code></li>
                <li><code>app/views/filename.html</code></li>
            </ol>

            <p>If neither file exists, an error message is displayed.</p>
        </section>

        <section class="content" id="example-usage">
            <h3>Example Usage in Controllers</h3>
            <p>
                The <code>ControllerAbstract</code> class provides a view method that leverages the
                <code>View</code> class to render views.
                Controllers can call this method to display views.
            </p>
            <CodeHighlighter :code="exampleController" />
            <p>
                In this example, the <code>ExampleController</code> class defines two methods:
                index and about. Both methods use the view method from <code>ControllerAbstract</code> to render the
                index and about views, respectively.
            </p>
        </section>

        <section class="content" id="conclusion">
            <h3>Conclusion</h3>
            <p>
                The iMono framework's view rendering system is designed to be simple and flexible. By
                storing view files in the <code>app/views</code> directory and using the view method
                from <code>ControllerAbstract</code>, developers can easily manage and render views in their
                applications.
            </p>
        </section>
    </main>
</template>


<script setup>
import CodeHighlighter from '../components/CodeHighlighter.vue';

const renderMethod = `public static function render($filename)`;

const exampleController = `<?php

namespace app\\http\\controller;

use app\\core\\controller\\ControllerAbstract;

class ExampleController extends ControllerAbstract
{
    public function index()
    {
        $this->view('index');
    }

    public function about()
    {
        $this->view('about');
    }
}
`;
</script>