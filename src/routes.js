/*
 * Copyright 2017-2020 Samuel Rowe, Joel E. Rego
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { Redirect } from "react-router-dom";

import errorConfiguration from "./error/configuration";
import visitorConfiguration from "./visitor/configuration";

const routes = [
    ...errorConfiguration,
    ...visitorConfiguration,
    {
        path: "/",
        exact: true,
        component: () => <Redirect to="/api" />,
    },
    {
        component: () => <Redirect to="/error/404" />,
    },
];

export default routes;
