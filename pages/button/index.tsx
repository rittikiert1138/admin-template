import React from "react";
import { FiArchive } from "react-icons/fi";
import { Button, buttonVariants } from "@/components/ui/button";
import Layout from "@/components/layouts/Layout";
import { Paper } from "@/components/ui/paper";

const ButtonPage = () => {
  return (
    <Layout>
      <Paper title="Styles">
        <div className="flex items-center">
          <Button className="mr-2">Button</Button>
          <Button className="mr-2 leading-4">
            With icon <FiArchive className="ml-2" />
          </Button>
          <Button variant="primary" className="mr-2 leading-4">
            <FiArchive />
          </Button>
        </div>
      </Paper>
      <Paper title="Colors">
        <Button variant="primary" className="mr-2">
          Default
        </Button>
        <Button variant="success" className="mx-2">
          Success
        </Button>
        <Button variant="secondary" className="mx-2">
          Secondary
        </Button>
        <Button variant="warning" className="mx-2">
          Warning
        </Button>
        <Button variant="danger" className="mx-2">
          Danger
        </Button>
      </Paper>
      <Paper title="Outline">
        <Button variant="primary-outline" className="mr-2">
          Default <FiArchive className="ml-2" />
        </Button>
        <Button variant="success-outline" className="mx-2">
          Success <FiArchive className="ml-2" />
        </Button>
        <Button variant="secondary-outline" className="mx-2">
          Secondary <FiArchive className="ml-2" />
        </Button>
        <Button variant="warning-outline" className="mx-2">
          Warning <FiArchive className="ml-2" />
        </Button>
        <Button variant="danger-outline" className="mx-2">
          Danger <FiArchive className="ml-2" />
        </Button>
      </Paper>
      <Paper title="Size">
        <div className="mb-4">
          <h3 className="mb-3 font-medium">Large</h3>
          <div>
            <Button className="mr-2" size="lg">
              Button
            </Button>
            <Button variant="primary-outline" size="lg" className="mr-2">
              Button
            </Button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="mb-3 font-medium">Default</h3>
          <div>
            <Button className="mr-2">Button</Button>
            <Button variant="primary-outline" className="mr-2">
              Button
            </Button>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-medium">Small</h3>
          <div>
            <Button className="mr-2" size="sm">
              Button
            </Button>
            <Button variant="primary-outline" size="sm" className="mr-2">
              Button
            </Button>
          </div>
        </div>
      </Paper>
    </Layout>
  );
};

export default ButtonPage;
