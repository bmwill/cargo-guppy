initSidebarItems({"enum":[["BuildTargetId","An identifier for a build target within a package."],["BuildTargetKind","The type of build target (library or binary)."],["DependencyDirection","The direction in which to follow dependencies."],["EnabledStatus","Whether a dependency or feature is enabled on a specific platform."],["UnknownStatus","More information about a dependency or feature whose evaluation is unknown."]],"struct":[["BuildTarget","A build target in a package."],["Cycles","Contains information about dependency cycles."],["DependencyMetadata","Information about a specific kind of dependency (normal, build or dev) from a package to another package."],["DependsCache","An optional cache used to speed up `depends_on` queries."],["DotWrite","A write target for `Dot` graphs. Use with the `write!` macro."],["IntoIds","An iterator over package IDs in topological order."],["IntoIterLinks","An iterator over dependency links."],["IntoLinks","An iterator over dependency links in topological order."],["IntoMetadatas","An iterator over package metadata in topological order."],["PackageEdge","Details about a specific dependency from a package to another package."],["PackageGraph","A graph of packages and dependencies between them, parsed from metadata returned by `cargo metadata`."],["PackageGraphData","Per-package data for a PackageGraph instance."],["PackageLink","Represents a dependency from one package to another."],["PackageMetadata","Information about a specific package in a `PackageGraph`."],["PackageQuery","A query over a package graph."],["PackageSet","A set of resolved packages in a package graph."],["Prop09Resolver","A randomly generated package resolver."],["Workspace","Information about a workspace, parsed from metadata returned by `cargo metadata`."]],"trait":[["PackageDotVisitor","A visitor used for formatting `dot` graphs."],["PackageResolver","Represents whether a particular link within a package graph should be followed during a resolve operation."]]});